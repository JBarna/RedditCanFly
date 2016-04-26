# RedditCanFly
A Reddit application that sends desktop notificiations flying across your screen. Fully customizable.

## Installation
### Dependencies
RedditCanFly depends on Node.js and Java. You must have `node` in your `PATH`, along with `java`.
To see if you have either, type `node --version` and `java -version` (one - ) in your terminal.
### Step 1
[Download](https://github.com/JBarna/RedditCanFly/archive/release.zip) the latest release from GitHub and unzip.

### Step 2
[Register your own reddit app](https://www.reddit.com/prefs/apps) , click `register your own app` on the bottom.
##### Fill in these values
- Name: RedditCanFly_yourusername
- Script
- redirect uri: http://127.0.0.1:5050/authorize_callback

### Step 3
- Open `user_config.js` in the downloaded application.
- Fill in your values of `CLIENT_ID` AND `CLIENT_SECRET`

### Step 4
Update any other values in the `user_config` file you wish.

## Run the thing!
First run the program from your terminal to make sure there are no errors 
```
// from the root directory
node .
```

Once the program is running correctly, run the program in the background
```
// on windows only (sorry)
start /B node .
```

# Licence
The MIT License (MIT)
Copyright (c) 2016 Joel Barna

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






