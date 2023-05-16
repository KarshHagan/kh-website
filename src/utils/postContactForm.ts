export const postContactData = (data: string, target: HTMLFormElement) => {
  $.ajax({
    url: target.action,
    method: 'POST',
    data: data,
    contentType: 'application/json',
    success: function (response) {
      if (response) {
        if (response.inlineMessage) {
          const parent = $(target).parent();
          parent.children('form').css('display', 'none');
          parent.children('.w-form-done').css('display', 'block');
        } else if (response.redirectUri) {
          window.location.href = response.redirectUri;
        }
      } else {
      }
    },
    error: function () {
      $(target).css('display', 'none').siblings('.w-form-fail').css('display', 'block');
    },
  });
};
