const navItems = document.querySelector('.navbar');
const openNavBtn = document.querySelector('#open-nav');
const closeNavBtn = document.querySelector('#close-nav');

const sidebar = document.querySelector('aside');
const ShowSidebarBtn = document.querySelector('#show_sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide_sidebar-btn');

// open the nav 
const openNav = () => {
  navItems.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

// close the nav 
const closeNav = () => {
  navItems.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}


openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);



//show sidebar on small devices
const showSidebar = () => {
    sidebar.style.left = '0';
    ShowSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

//hides sidebar on small devices
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    ShowSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}



ShowSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);