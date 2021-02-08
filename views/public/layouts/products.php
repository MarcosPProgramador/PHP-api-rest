<section class="gallery">
  <div class="gallery__sidebar">
    <div class="gallery__sidebar-top">
      <div class="gallery__align-buttons">

        <div class="gallery__sidebar-box">
          <button class="gallery__sidebar-button" btnopen data-target="create">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <span>Created</span>
          </button>
        </div>

        <div class="gallery__sidebar-box">
          <button class="gallery__sidebar-button" id="button-get" btnopen data-target="buy">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <span>Purchased</span>
          </button>
        </div>

        <div class="gallery__sidebar-box">
          <button class="gallery__sidebar-button" id="button-get-favorite" btnopen data-target="favorite">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <span>Favorites</span>
          </button>
        </div>

      </div>
    </div>


  </div>
  <div class="gallery__sidebar-open">
    <div class="gallery__sidebar-box" id="create">
      <div class="gallery__sidebar-box-top">
        <div class="gallery__sidebar-box-container">
          <div class="gallery__sidebar-box-align">

            <div class="gallery__sidebar-buttons">
              <button class="gallery__sidebar-button" btnclose data-target="create">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </button>
            </div>

            <div class="gallery__sidebar-title">
              <h2>Products you've created!</h2>
            </div>

          </div>
        </div>
      </div>
      <div class="gallery__sidebar-box-products">
        <div class="gallery__sidebar-box-container">
          <div class="gallery__sidebar-products-items" id="created-items">

          </div>
        </div>
      </div>
    </div>
    <div class="gallery__sidebar-box" id="buy">
      <div class="gallery__sidebar-box-top">
        <div class="gallery__sidebar-box-container">
          <div class="gallery__sidebar-box-align">

            <div class="gallery__sidebar-buttons">
              <button class="gallery__sidebar-button" btnclose data-target="buy">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </button>
            </div>

            <div class="gallery__sidebar-title">
              <h2>Products you bought!</h2>
            </div>

          </div>
        </div>
      </div>
      <div class="gallery__sidebar-box-products">
        <div class="gallery__sidebar-box-container" >
          <div class="gallery__sidebar-products-items" id="purchased-items">
          </div>
        </div>
      </div>
    </div>
    <div class="gallery__sidebar-box" id="favorite">
      <div class="gallery__sidebar-box-top">
        <div class="gallery__sidebar-box-container">
          <div class="gallery__sidebar-box-align">

            <div class="gallery__sidebar-buttons">
              <button class="gallery__sidebar-button" btnclose data-target="favorite">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </button>
            </div>

            <div class="gallery__sidebar-title">
              <h2>Favorites</h2>
            </div>

          </div>
        </div>
      </div>
      <div class="gallery__sidebar-box-products">
        <div class="gallery__sidebar-box-container">
          <div class="gallery__sidebar-products-items" id="favorites-items">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="gallery__container">
    <div class="gallery__padding">
      <div class="gallery__around">
        <div class="gallery__title">
          <h2>Products</h2>
        </div>
        <div class="gallery__products">
          <div class="items" id="products"></div>
          <div class="register-message">
              <div id="created-product-animate" class="register-message__box">
                <span>Created Product</span>
              </div>

          </div>
          <div class="register-product" id="register-product" style="display: none;">
            <div class="register-product__cover register-product--close">
              <div class="register-product__container">
                <div class="register-product__align">
                  <div class="register-product__box">
                    <button class="register-product-button--close register-product--close">
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <form method="post">
                      <div class="register-product__groups">
                        <div class="register-product__title">
                          <h2>Create your product</h2>

                        </div>
                      </div>
                      <div class="register-product__groups register-product__groups-top">
                        <div class="register-product__group">
                          <select id="product-select"></select>
                        </div>
                        <div class="register-product__group">
                          <select id="product-select-brand"></select>
                        </div>

                      </div>
                    <div class="register-product__groups register-product__groups-bottom">
                      <div class="register-product__group">
                        <label for="price">Price</label>
                        <input id="price" type="text">
                      </div>
                      <div class="register-product__group">
                        <button type="button" class="register-product__group-button register-product--close" id="register-product-button-send">Enviar</button>
                      </div>
                    </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="loading" id="loading" style="display: none;">
            <div class="loading__load-container">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="controls">
            <button id="loadmore" class="controls__control"><i class="fas fa-redo    "></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>