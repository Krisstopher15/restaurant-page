function about() {
  const about = document.createElement("div");
  about.classList.add("about");

  const aboutTxt = document.createElement("p");
  const aboutDesc = document.createElement("p");

  aboutTxt.classList.add("about-text");
  aboutDesc.classList.add("about-desc");

  aboutTxt.textContent = "ABOUT US";

  aboutDesc.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas ut tellus eget semper. Fusce sodales luctus velit, ut dapibus sem volutpat sed. Phasellus nec mauris in est ultricies feugiat. Ut ac ullamcorper lorem, vel eleifend velit. Sed at nisl pharetra ligula molestie pretium. Etiam dignissim ipsum quis arcu porttitor, in rutrum neque gravida. Nullam at efficitur felis. Maecenas fringilla ante lacus, at porta mauris ultrices et. Suspendisse potenti. Nam pellentesque ex vitae vestibulum cursus. Proin rutrum pharetra erat at mattis. Aliquam lobortis neque eget purus interdum congue. Donec cursus nibh a euismod rutrum. Phasellus quam tortor, porta a urna at, interdum consequat sem. Donec nec sagittis ipsum, quis fermentum diam. Suspendisse porta hendrerit purus tempus ullamcorper.";

  const aboutInfo = document.createElement("div");
  aboutInfo.classList.add("about-info");
  aboutInfo.appendChild(aboutTxt);
  aboutInfo.appendChild(aboutDesc);

  about.appendChild(aboutInfo);

  return about;
}

export { about };
