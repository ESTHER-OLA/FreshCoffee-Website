// function showSidebar() {
//   const sidebar = document.querySelector(".sidebar");
//   sidebar.style.display = "flex";
// }
// function hideSidebar() {
//   const sidebar = document.querySelector(".sidebar");
//   sidebar.style.display = "none";
// }

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";

  const sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.style.display = "none"; // Close the sidebar
    });
  });
}

// Call the hideSidebar function after defining it to apply the changes when the page loads
hideSidebar();
