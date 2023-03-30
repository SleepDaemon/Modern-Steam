// when user clicks on the button with id "btn" it will download the latest release from github repo

// get the latest release from github repo
const getLatestRelease = async () => {
  const response = await fetch("https://api.github.com/repos/SleepDaemon/Modern-Steam/releases/latest");
  const data = await response.json();
  return data;
};

// // download the latest release
const downloadLatestRelease = async () => {
    const latestRelease = await getLatestRelease();
    const downloadUrl = latestRelease.assets[0].browser_download_url;
    window.open(downloadUrl);
    };

// // add event listener to the button
document.getElementById("btn").addEventListener("click", downloadLatestRelease);