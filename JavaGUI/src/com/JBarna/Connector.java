package com.JBarna;

import javax.swing.*;
import java.awt.color.ICC_ColorSpace;
import java.io.IOException;
import java.util.Scanner;

/**
 * Created by JBarna on 4/23/2016.
 */
public class Connector {
    private static Connector INSTANCE;

    private FlyingGUI gui;
    private Scanner in;
    private TrayIconManager iconManager;

    public static Connector getInstance(){

        if (INSTANCE == null)
            INSTANCE = new Connector();

        return INSTANCE;

    }

    private Connector(){
        in = new Scanner(System.in);
        in.useDelimiter(",");
    }

    public void waitForNewMessage() {

        new Thread(new Runnable() {
            @Override
            public void run() {

                String title = in.next();
                String link = in.next();

                if (title.equals("empty_title")) title = "";
                if (link.equals("empty_link")) link = "";

                if (link.length() > 0)
                    TrayIconManager.getInstance().addNotification(title, link);

                final String _title = title;
                SwingUtilities.invokeLater(new Runnable() {
                    @Override
                    public void run() {
                        FlyingGUI.getInstance().go(_title);
                    }
                });
            }
        }).start();
    }

}
