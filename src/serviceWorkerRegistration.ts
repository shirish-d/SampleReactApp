export function register() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

  if (process.env.NODE_ENV !== "production") {
    const scriptUrl = new URL(swUrl, window.location.href).href;
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) =>
        Promise.all(
          registrations
            .filter((registration) =>
              [registration.active, registration.waiting, registration.installing].some(
                (worker) => worker?.scriptURL === scriptUrl
              )
            )
            .map((registration) => registration.unregister())
        )
      )
      .catch((error) => {
        console.error("ServiceWorker cleanup failed: ", error);
      });
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log("ServiceWorker registered successfully: ", registration.scope);
      })
      .catch((error) => {
        console.error("ServiceWorker registration failed: ", error);
      });
  });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
