registerServiceWorker = () => {
  if (!navigator.serviceWorker) return;

  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service worker registered sucessfully!.....')
  }).catch(() => {
    console.log('Service worker registration fialed......')
  })
}