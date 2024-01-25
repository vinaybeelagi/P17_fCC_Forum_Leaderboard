const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

// Use const for functions that won't be reassigned
const forumCategory = (id) => {
  let selectedCategory = {};

  if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];

    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    selectedCategory.className = "general";
    selectedCategory.category = "General";
    selectedCategory.id = 1;
  }

  const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
  const linkText = selectedCategory.category;
  const linkClass = `category ${selectedCategory.className}`;

  return `<a href="${url}" class="${linkClass}" target="_blank">
    ${linkText}
  </a>`;
};

// function timeago
const timeAgo = (postTime) => {
  const currentTime = new Date();
  const lastPost = new Date(postTime);

  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};

// function viewcount for time count
const viewCount = (views) => {
  const thousands = Math.floor(views / 1000);

  if (views >= 1000) {
    return `${thousands}k`;
  }

  return views;
};
