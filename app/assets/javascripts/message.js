$(function(){
  function buildHTML(message){
    if ( message.image ){
      let html =
      `<div class="Main-content__center__comment">
        <div class="Comment-name">
          <div class="Name">
            ${message.user_name}
          </div>
          <div class="Time">
            ${message.created_at}
          </div>
        </div>
          <div class="Comment-text">
            <div class="Message">
              <p class="Message__content">
                ${message.content}
              </p>
                <img class="Message__image" src="${message.image}">
            </div>
          </div>
      </div>`
      return html;
    } else {
      let html =
      `<div class="Main-content__center__comment">
        <div class="Comment-name">
          <div class="Name">
            ${message.user_name}
          </div>
          <div class="Time">
            ${message.created_at}
          </div>
        </div>
          <div class="Comment-text">
            <div class="Message">
              <p class="Message__content">
                ${message.content}
              </p>
            </div>
         </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildHTML(message);
      $('.Main-content__center').append(html);
      $('.Main-content__center').animate({ scrollTop: $('.Main-content__center__comment')[0].scrollHeight});
      $('form')[0].reset();
      $('.Form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  });
});