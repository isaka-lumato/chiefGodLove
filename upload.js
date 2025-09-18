const ftp = require("basic-ftp");
const path = require("path");
const fs = require("fs");

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
      host: "ftp.chiefgodlove.vip",      // your FTP host
      user: "godwin@chiefgodlove.vip",   // your FTP user
      password: "Moshi1996@_",            // your FTP password
      secure: false                      // set to true if FTPS is required
    });

    console.log("Connected to FTP");
    // Upload everything inside "build" folder to "/public_html" on the FTP server
    await uploadDirectory(client, path.join(__dirname, "build"), "/public_html");
    console.log("Upload complete!");
  } catch (err) {
    console.error("FTP upload failed:", err);
  } finally {
    client.close();
  }
}

main();
