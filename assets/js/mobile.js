"use strict";

const menu = document.querySelector('.menu-icon');
const mobileSidebarHolder = document.querySelector('.mobile-sidebar-holder');
const mobileSidebar = document.querySelector('.mobile-sidebar');
const closeBtnMobile = document.querySelector('.mobile-sidebar__top--close-btn');

menu.addEventListener('click', () => {
    mobileSidebarHolder.style.left = '0';
    mobileSidebarHolder.style.opacity = '1';
    document.body.classList.add('overflow--hidden');
  })

  mobileSidebarHolder.addEventListener('click', () => {
    mobileSidebarHolder.style.left = '-100%';
    mobileSidebarHolder.style.opacity = '0';
    document.body.classList.remove('overflow--hidden');
  });
  
  mobileSidebar.addEventListener('click', e => {
    e.stopPropagation();
  })


  closeBtnMobile.addEventListener('click', () => {
    mobileSidebarHolder.style.left = '-100%';
    mobileSidebarHolder.style.opacity = '0';
    document.body.classList.remove('overflow--hidden');
  });
 