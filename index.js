const notifications = document.querySelectorAll('.notification')
const clearAllBtn = document.getElementById('clearAll')

notifications.forEach(notification => {
  clearAllBtn.addEventListener('click', () => {
    notification.classList.add('read')
    notification.classList.remove('new')
  })
})