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
          <button class="gallery__sidebar-button" btnopen data-target="buy">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <span>Purchased</span>
          </button>
        </div>

        <div class="gallery__sidebar-box">
          <button class="gallery__sidebar-button" btnopen data-target="favorite">
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
        <div class="gallery__sidebar-box-container">
          <div class="gallery__sidebar-products-items">
            <div class="gallery__sidebar-product-item">
              <div class="gallery__sidebar-product-name-price">
                <div class="gallery__sidebar-product-name">Galaxy A10</div>
                <div class="gallery__sidebar-product-price">200.00</div>
              </div>
              <div class="gallery__sidebar-product-trash">
                <button class="gallery__sidebar-button-trash"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
            </div>
            <div class="gallery__sidebar-product-item">
              <div class="gallery__sidebar-product-name-price">
                <div class="gallery__sidebar-product-name">Galaxy A10</div>
                <div class="gallery__sidebar-product-price">200.00</div>
              </div>
              <div class="gallery__sidebar-product-trash">
                <button class="gallery__sidebar-button-trash"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
            </div>
            <div class="gallery__sidebar-product-item">
              <div class="gallery__sidebar-product-name-price">
                <div class="gallery__sidebar-product-name">Galaxy A10</div>
                <div class="gallery__sidebar-product-price">200.00</div>
              </div>
              <div class="gallery__sidebar-product-trash">
                <button class="gallery__sidebar-button-trash"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
            </div>
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
          <div class="gallery__sidebar-products-items">
            <div class="gallery__sidebar-product-item">
              <div class="gallery__sidebar-product-name-price">
                <div class="gallery__sidebar-product-name">Galaxy A10</div>
                <div class="gallery__sidebar-product-price">200.00</div>
              </div>
              <div class="gallery__sidebar-product-trash">
                <button class="gallery__sidebar-button-trash"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
            </div>
            <div class="gallery__sidebar-product-item">
              <div class="gallery__sidebar-product-name-price">
                <div class="gallery__sidebar-product-name">Galaxy A10</div>
                <div class="gallery__sidebar-product-price">200.00</div>
              </div>
              <div class="gallery__sidebar-product-trash">
                <button class="gallery__sidebar-button-trash"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
            </div>
            <div class="gallery__sidebar-product-item">
              <div class="gallery__sidebar-product-name-price">
                <div class="gallery__sidebar-product-name">Galaxy A10</div>
                <div class="gallery__sidebar-product-price">200.00</div>
              </div>
              <div class="gallery__sidebar-product-trash">
                <button class="gallery__sidebar-button-trash"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
            </div>
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