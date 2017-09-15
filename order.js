$(() => {
  console.log('order page is loaded!');

  $('.submitContainer').on('click', e => {
    e.preventDefault();
    swal({
      title: 'Great!',
      text: 'Your order for a pickup has been placed, we will notify you through text when a driver is on the way!',
      type: 'success',
      confirmButtonText: "Okay!"
    });
  })
})
