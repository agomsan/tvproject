const buttonOnOff = document.querySelector(".onOff");
const nameChannel = document.querySelector(".nameChannel");
const imgHome = "./img/home.png";
const screenTv = document.querySelector(".screenTv");
const homeBtn = document.querySelector(".homeBtn");
let currentChannelIndex = 0;
function myFunc()  {
	var now = new Date();
	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	document.getElementById('display-time').innerHTML= time;
}
myFunc();
setInterval(myFunc, 1000);

const channel = [
  {
    number: 1,
    name: "DISNEY+",
    url: "./img/disney.png",
  },
  {
    number: 2,
    name: "ESPN",
    url: "./img/espn.png",
  },
  {
    number: 3,
    name: "FOX",
    url: "./img/fox.png",
  },
  {
    number: 4,
    name: "HULU",
    url: "./img/hulu.png",
  },
  {
    number: 5,
    name: "Netflix",
    url: "./img/netflix.gif",
  },
  {
    number: 6,
    name: "HBO",
    url: "./img/hbo.gif",
  },
  {
    number: 7,
    name: ":)",
    url: "./img/onit.gif",
  },
  {
    number: 8,
    name: ":)",
    url: "./img/onit.gif",
  },
  {
    number: 9,
    name: ":)",
    url: "./img/onit.gif",
  },
  {
    number: 10,
    name: ":)",
    url: "./img/onit.gif",
  },
  {
    number: 11,
    name: ":)",
    url: "./img/onit.gif",
  },
  {
    number: 12,
    name: ":)",
    url: "./img/onit.gif",
  },
];

const onOffTv = () => {
  if (screenTv.classList.contains("none")) {
    screenTv.classList.remove("none");
  } else {
    screenTv.classList.add("none");
  }
};

const goHome = () => {
  if (!screenTv.classList.contains("none")) {
    const pic = document.querySelector(".channel");
    pic.src = imgHome;
    nameChannel.textContent = "Home";
    currentChannelIndex = -1;
  }
};

const changePic = () => {
  const pic = document.querySelector(".channel");
  const currentChannel = channel[currentChannelIndex];
  if (currentChannel) {
    pic.src = currentChannel.url;
    nameChannel.textContent = currentChannel.name;
  }
};

const channelUp = () => {
  currentChannelIndex = 
  (currentChannelIndex + 1);
  changePic();
};

const channelDown = () => {
  currentChannelIndex =
    (currentChannelIndex - 1);
  changePic();
};

changePic();
