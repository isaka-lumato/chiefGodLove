require('dotenv').config();
const ftp = require("basic-ftp");
const path = require("path");
const fs = require("fs");

// Validate environment variables
if (!process.env.FTP_HOST || !process.env.FTP_USER || !process.env.FTP_PASSWORD) {
  console.error("Error: Missing FTP credentials in environment variables");
  console.error("Please create a .env file with FTP_HOST, FTP_USER, and FTP_PASSWORD");
  process.exit(1);
}

async function uploadDirectory(client, localDir, remoteDir) {
  // Make sure we start in the remoteDir on the server
  await client.ensureDir(remoteDir);
  await client.clearWorkingDir(); // Optional: clear remoteDir contents
  await client.cd(remoteDir);

  // Recursive upload function
  async function uploadFolder(folder) {
    const files = fs.readdirSync(folder);
    for (const file of files) {
      const fullPath = path.join(folder, file);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        // Create and enter directory once
        await client.ensureDir(file); // this changes into the directory
        await uploadFolder(fullPath); // recurse into local folder
        await client.cdup();          // go back to parent directory on FTP server
      } else {
        // Upload file to current directory on FTP server
        await client.uploadFrom(fullPath, file);
        console.log(`Uploaded file: ${file}`);
      }
    }
  }

  await uploadFolder(localDir);
}

async function main() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: process.env.FTP_HOST,           // FTP host from .env
      user: process.env.FTP_USER,           // FTP user from .env
      password: process.env.FTP_PASSWORD,   // FTP password from .env
      secure: process.env.FTP_SECURE === 'true' || false  // optional FTPS
    });

    console.log("Connected to FTP");
    
    // Upload everything inside "build" folder to the remote directory
    const remoteDir = process.env.FTP_REMOTE_DIR || "/public_html";
    await uploadDirectory(client, path.join(__dirname, "build"), remoteDir);
    
    console.log("Upload complete!");
  } catch (err) {
    console.error("FTP upload failed:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

main();