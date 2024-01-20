const notifications = document.querySelectorAll('.notification')
const clearAllBtn = document.getElementById('clearAll')
const countNotifications = document.querySelector('.countNotifications')

notifications.forEach(notification => {
  clearAllBtn.addEventListener('click', () => {
    notification.classList.add('read')
    notification.classList.remove('new')
    countNotifications.textContent = '0'
  })
})