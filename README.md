Let's get started with installing and running this code exercise! :)

Prerquisites:
1. Your system will require node.js to run this application on you local computer.

To check whether you have Node.js or not, open Terminal (or another CLI of your choice), and type the command node -v . Press Enter. The returning line will display the Node.

If it says command not found,

Step 1: Download Node.js Installer
In a web browser, navigate to https://nodejs.org/en/download/. Click the Windows Installer button to download the latest default version. At the time this article was written, version 10.16.0-x64 was the latest version. The Node.js installer includes the NPM package manager.

Step 2: Install Node.js and NPM from Browser
1. Once the installer finishes downloading, launch it. Open the downloads link in your browser and click the file. Or, browse to the location where you have saved the file and double-click it to launch.
2. The system will ask if you want to run the software – click Run.
3. You will be welcomed to the Node.js Setup Wizard – click Next.
4. On the next screen, review the license agreement. Click Next if you agree to the terms and install the software.
5. The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click Next.
6. The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking Next.
7. Finally, click the Install button to run the installer. When it finishes, click Finish.

Step 3: Verify Installation
Open a command prompt (or PowerShell), and enter the following:
node –v

The system should display the Node.js version installed on your system. You can do the same for NPM:
npm –v


*---------- Once node is installed ----------------*

Steps to be followed to download the React app:

1. Click on "Code" (green button) button on top right corner next to "Go to file" button.
2. Click on Download ZIP button to download the ZIP file of the app
3. A ZIP file named "bhargavreactapp-main" will be downloaded.
4. Extract this ZIP file to the place you want to run the React app.
5. You will get a folder named "bhargavreactapp-main".
6. Open Terminal/Command Prompt (or another CLI of your choice) 
7. Traverse to "bhargavreactapp-main" using cd command.
8. Enter npm install
9. Node modules will be install that might take around 5 minutes.
10. Once they are installed, enter the following code to install Formik (Used as a validation dependancy/library to apply validations):
    npm install formik --save
     and press enter
11. After Formik is installed, enter the following code to install Yup (Again a library/dependancy to apply validations):
    npm install -S yup
     and press enter
12. Once all the above steps are completed, Enter the following to start react app:
    npm start
     and press enter
13. App will be deployed on a browser. Enjoy it's working and UI. :)

********************* HOPE YOU ENJOYED THIS APP! THANK YOU! ************************************

