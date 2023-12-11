<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{ App\Utils\Options::get('system_name') }}</title>
    <!-- css_cdn_link -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="{{ asset('frontend/js/jquery-3.5.1.min.js') }}"></script>
    <!-- css_link  -->
    <link rel="stylesheet" href="{{ asset('css/main.css') }} ">
     <link rel="stylesheet" href="{{ asset('frontend/css/main.css') }} ">
</head>

<body>
<header>
    @include('frontend.common.top-ribbon')
    @include('frontend.common.header')
    @include('frontend.common.sigin-modal')
</header>
<main>
    
     <div
      class="page-banner"
      style="background-image: url(./images/page-banner-bg.jpg)"
    >
      <div class="wrapper">
        <div class="content">
          <h3><span>Welcome to</span>GML</h3>

          <p>
            You are inside the world of 
            Governor’s Monthly Letter (GML) 
            published in various Rotary Years. 
            <br />
            <br />

            <strong
              >Find the one<br />
              you are looking for!</strong
            >
          </p>
        </div>
      </div>
    </div>

@if($gml)
    <section class="section_group bg-color">
      <div class="new-GML">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <img src="{{asset('frontend/image_banners/'. $gml->image_banner)}}" alt="book-image" />
            </div>

            <div
              class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
            >
              <div class="content">
                <h6>Newest Issue</h6>
@php
$currentYear = date('Y');
$currentMonth = date('m');
$gmlYear = intval(explode('-', $gml->year)[0]);
$gmlMonth = date('m', strtotime($gml->month));
$displayYear = ($currentMonth >= $gmlMonth) ? $currentYear : $currentYear - 1;
@endphp

<h4>{{ strtoupper($gml->month) }} {{ $currentYear }}</h4>




                <div class="button-group">

                  <!-- In your Blade view (e.g., resources/views/frontend/gml_list.blade.php) -->
<a href="{{ route('home.gml_details', ['id' => $gml->id]) }}" class="btn btn-primary read-more-btn">
    Read More <i class="fas fa-angle-right"></i>
</a>

                  <a  class="btn btn-success download-btn" href="{{ ($gml && $gml->month) ? (asset('/frontend/gmls/'.$gml->filename)) :'' }}" target="_blank">
                                   Download PDF <i class="fa fa-download"></i></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    @endif

    <section class="section_group">
      <div class="GML-list">
        <div class="container hidden-line">
          <div class="row">
              @forelse($gmls as $gml)
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img class="card-img-top" src="{{asset('frontend/image_banners/'. $gml->image_banner)}}" alt="book" />
                <div class="card-body">
                  <h5 class="card-title">{{ strtoupper($gml->month) }} {{ strtoupper($currentYear) }}</h5>

                  <div class="button-group">
                 
                    <a href="{{ route('home.gml_details', ['id' => $gml->id]) }}" class="btn btn-primary read-more-btn">
    Read More <i class="fas fa-angle-right"></i>
</a>

                    
                     <a  class="btn btn-success download-btn" href="{{ ($gml && $gml->month) ? (asset('/frontend/gmls/'.$gml->filename)) :'' }}" target="_blank">
                                   Download PDF <i class="fa fa-download"></i></a>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          @empty
         @endforelse

  
            
          </div>
        </div>
      </div>
    </section>
</main>
@include('frontend.common.footer')
<!-- js_cdn_link -->
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<!-- js_link  -->
<script src=" {{ asset('frontend/js/common.js') }}"></script>

</body>

</html>










<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{ App\Utils\Options::get('system_name') }}</title>
    <!-- css_cdn_link -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="{{ asset('frontend/js/jquery-3.5.1.min.js') }}"></script>
    <!-- css_link  -->
    <link rel="stylesheet" href="{{ asset('css/main.css') }} ">
     <link rel="stylesheet" href="{{ asset('frontend/css/main.css') }} ">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
</head>

<body>
<header>
    @include('frontend.common.top-ribbon')
    @include('frontend.common.header')
    @include('frontend.common.sigin-modal')
</header>
<main>
<div class="GML-section GML-details-banner">
                  @php
$currentYear = date('Y');
$currentMonth = date('m');
$gmlYear = intval(explode('-', $gml->year)[0]);
$gmlMonth = date('m', strtotime($gml->month));
$displayYear = ($currentMonth >= $gmlMonth) ? $currentYear : $currentYear - 1;
@endphp
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <!--<ol class="carousel-indicators">-->
        <!--  <li-->
        <!--    data-target="#carouselExampleIndicators"-->
        <!--    data-slide-to="0"-->
        <!--    class="active"-->
        <!--  ></li>-->

        <!--</ol>-->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-content">
              
               <img src="{{asset('frontend/home_banners/'. $gml->home_banner)}}" alt="book-image" />

              <div class="wrapper">
                <div class="content">
                  <h3><span>Digital Launch of</span>GML</h3>

                  <p>
                    Find your copy of <strong>{{ strtoupper($gml->month) }} {{ strtoupper($currentYear) }}</strong> issue and enjoy
                    reading!
                  </p>

                  <!--<a href="GML-list.html" class="btn btn-outline-danger">-->
                  <!--  Read More <i class="fas fa-angle-right"></i>-->
                  <!--</a>-->
                </div>
              </div>
            </div>
          </div>

        

 
        </div>
      </div>
    </div>

    <section class="section_group">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="GML-details-content">
              <div class="detail-header">
                <div class="row">
                  <div class="col-md-6">
                    <h6>{{ strtoupper($gml->month) }}: Transition Month</h6>
                    <h1>
                      FROM THE EDITOR'S DESK <strong>{{ strtoupper($gml->title) }}</strong> - {{ strtoupper($gml->month) }} {{ strtoupper($currentYear) }}
                    </h1>

                    <div class="user-details">
                      <h4 class="name">By {{ strtoupper($councilMembers->users->firstname) }}{{ strtoupper($councilMembers->users->lastname) }}</h4>
                      <p>
                        {{$councilMembers->role}} - {{$councilMembers->council->name}} {{$rundate}}
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="button-group">
                    
                   
                      <a  class="btn btn-success download-btn" href="{{ ($gml && $gml->month) ? (asset('/frontend/gmls/'.$gml->filename)) :'' }}" target="_blank">
                                   View PDF <i class="fa fa-file-pdf-o"></i></a>
                                   
                                   <a  class="btn btn-success download-btn" href="{{ ($gml && $gml->month) ? (asset('/frontend/gmls/'.$gml->filename)) :'' }}" download>
                                   Download PDF <i class="fas fa-download"></i></a>
                    </div>
                  </div>

                  <div class="col-md-8">
                    <div class="user">
                      <img
                        src="{{ (isset($councilMembers->users->user_details->image) && $councilMembers->users->user_details->image != "") ? asset("frontend/img/profiles/".$councilMembers->users->user_details->image) : asset("frontend/img/default.png") }}"
                        alt="user-image"
                      />

                      <p>
                        {{$gml->message}}
                      </p>
                    </div>

                    <p class="description">
                     {!! ($gml && $gml->description) ? $gml->description :''  !!}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section_group bg-color">
      <div class="GML-list details-page-GML-list">
        <div class="container hidden-line-new">
          <div class="row">
            <div class="col-xl-12">
              <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                @forelse($gmls as $gml)
                 <div class="swiper-slide">
                  <div class="card">
                    <img class="card-img-top" src="{{asset('frontend/image_banners/'. $gml->image_banner)}}" alt="book" />
                    <div class="card-body">
                      <h5 class="card-title">{{$gml->month}} {{ $currentYear }}</h5>
                    </div>
                  </div>
                 </div>
                 @empty
                @endforelse
              </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
</main>
@include('frontend.common.footer')
<!-- js_cdn_link -->
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<!-- js_link  -->
<script src=" {{ asset('frontend/js/common.js') }}"></script>

<script>
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
    });
  </script>

</body>

</html>


















@import url('https://fonts.cdnfonts.com/css/gotham-6');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gotham', sans-serif;
  border: none;
  outline: none;
  background: none;
  text-decoration: none;
  list-style: none;
}

.wrapper {
  max-width: 1400px;
  padding: 0 1rem;
  margin: 0 auto;
}

.section_group {
  padding: 3rem 0;
}
.section_group.bg-color {
  background-color: #E9E9E9;
}

.GML-section .carousel-inner .carousel-content {
  position: relative;
  width: 100% !important;
  height: 30rem !important;
}
.GML-section .carousel-inner .carousel-content img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.GML-section .carousel-inner .carousel-content .wrapper {
  position: relative;
  height: 100%;
  z-index: 2;
}
.GML-section .carousel-inner .carousel-content .content {
  max-width: 30rem;
  position: absolute;
  bottom: 8rem;
  right: 1rem;
}
.GML-section .carousel-inner .carousel-content .content h3 {
  position: relative;
  font-size: 7rem;
  line-height: 0;
  font-weight: 800;
  margin-bottom: 4rem;
  text-align: left;
}
.GML-section .carousel-inner .carousel-content .content h3 span {
  position: absolute;
  right: 9rem;
  top: 50%;
  transform: translate(-50%);
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Cormorant Garamond', serif;
  width: 100%;
  text-align: right;
}
.GML-section .carousel-inner .carousel-content .content p {
  font-size: 1rem;
  color: #B3221E;
  max-width: 12rem;
  width: 100%;
}
.GML-section .carousel-inner .carousel-content .content button {
  background-color: #ffffff;
  color: #000000;
}
.GML-section .carousel-inner .carousel-content .content button i {
  color: #B3221E;
  font-size: 1.5rem;
}
.GML-section .carousel-inner .carousel-content .content button:hover {
  color: #B3221E;
}

.page-banner {
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.page-banner .content {
  margin-top: 3rem;
  margin-left: 15rem;
}
.page-banner .content h3 {
  position: relative;
  font-size: 10rem;
  line-height: 0;
  font-weight: 800;
  margin-bottom: 6rem;
  text-align: left;
  color: #ffffff;
}
.page-banner .content h3 span {
  position: absolute;
  right: 13rem;
  top: 50%;
  transform: translate(-50%);
  font-size: 3.5rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Cormorant Garamond', serif;
  width: 100%;
  text-align: right;
  color: #000000;
}
.page-banner .content p {
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: #E6A045;
  max-width: 22rem;
  width: 100%;
}
.page-banner .content p strong {
  text-transform: uppercase;
}
.page-banner .content button {
  background-color: #ffffff;
  color: #000000;
}
.page-banner .content button i {
  color: #B3221E;
  font-size: 1.5rem;
}
.page-banner .content button:hover {
  color: #B3221E;
}

.new-GML img {
  width: 100%;
}
.new-GML .content {
  margin-top: 1rem;
}
.new-GML .content h6 {
  font-size: 1.3rem;
  font-weight: 400;
}
.new-GML .content h4 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-transform: uppercase;
}
.new-GML .content .button-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.new-GML .content .button-group .read-more-btn {
  background-color: #0D76BB;
}
.new-GML .content .button-group .read-more-btn:hover {
  background-color: #0b67a3;
}
.new-GML .content .button-group .download-btn {
  background-color: #0c9444;
}
.new-GML .content .button-group .download-btn:hover {
  background-color: #0a7c39;
}

.GML-list.details-page-GML-list .hidden-line::after {
  background-color: #E9E9E9;
}
.GML-list.details-page-GML-list .card {
  background: none;
  margin: 2rem 0;
}
.GML-list.details-page-GML-list .card .card-body .card-title {
  margin-bottom: 0;
}
.GML-list .hidden-line, .GML-list .hidden-line-new {
  position: relative;
}
.GML-list .hidden-line::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #ffffff;
}
.details-page-GML-list .hidden-line-new::after {
  content: "";
  position: absolute;
  right: 0px;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #E9E9E9;
  z-index: 3;
}
.details-page-GML-list .swiper-button-next, 
.details-page-GML-list .swiper-button-prev {
    color: #000000;
}

.GML-list .col-md-4, .GML-list .col-md-6, .GML-list .col-sm-12, .GML-list .col-xl-3, .GML-list .col-sm-6 {
  padding: 0;
}
.GML-list .card {
  padding: 0 1.5rem;
  border: none;
  border-radius: 0;
  border-right: 1px solid gray;
  margin-bottom: 5rem;
}
.GML-list .card .card-body {
  padding: 0;
}
.GML-list .card .card-body .card-title {
  margin: 1.2rem 0;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}
.GML-list .card .card-body .button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.GML-list .card .card-body .button-group .read-more-btn {
  background-color: #0D76BB;
  font-size: 0.7rem;
}
.GML-list .card .card-body .button-group .read-more-btn:hover {
  background-color: #0b67a3;
}
.GML-list .card .card-body .button-group .download-btn {
  background-color: #0c9444;
  font-size: 0.7rem;
}
.GML-list .card .card-body .button-group .download-btn:hover {
  background-color: #0a7c39;
}

.GML-details-banner .carousel-inner .carousel-content {
  position: relative;
  width: 100% !important;
  height: 70vh;
}

.GML-details-content .detail-header h6 {
  font-size: 1rem;
  text-transform: uppercase;
  color: #B3221E;
  font-weight: 700;
  margin-bottom: 2rem;
}
.GML-details-content .detail-header h1 {
  font-weight: 300;
  max-width: 25rem;
  font-size: 2.3rem;
  letter-spacing: 1px;
  position: relative;
  margin-bottom: 3rem;
}
.GML-details-content .detail-header h1::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1.5rem;
  height: 0.6rem;
  width: 2.5rem;
  background-color: #B3221E;
}
.GML-details-content .detail-header h1 strong {
  font-weight: 700;
}
.GML-details-content .detail-header .user-details {
  margin-bottom: 1rem;
}
.GML-details-content .detail-header .user-details h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
.GML-details-content .detail-header .user-details p {
  font-size: 0.8rem;
  max-width: 13rem;
}
.GML-details-content .detail-header .button-group {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.GML-details-content .detail-header .button-group .btn {
  padding: 0.4rem 1.3rem;
}
.GML-details-content .detail-header .button-group .read-more-btn {
  background-color: #0D76BB;
}
.GML-details-content .detail-header .button-group .read-more-btn:hover {
  background-color: #0b67a3;
}
.GML-details-content .detail-header .button-group .download-btn {
  background-color: #0c9444;
}
.GML-details-content .detail-header .button-group .download-btn:hover {
  background-color: #0a7c39;
}
.GML-details-content .user {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0;
}
.GML-details-content .user img {
  height: 8rem;
  width: 10rem;
  -o-object-fit: cover;
     object-fit: cover;
}
.GML-details-content .user p {
  width: calc(100% - 10rem);
  font-size: 1.3rem;
  color: #B3221E;
}
.GML-details-content .description {
  font-size: 0.9rem;
  line-height: 1.4rem;
  color: #333333;
}

@media only screen and (max-width: 1400px) {
    .details-page-GML-list .hidden-line-new::after {
      right: 15px;
    }
}

@media only screen and (max-width: 1000px) {
  .GML-section .carousel-inner .carousel-content {
    height: 30rem;
  }
  .GML-section .carousel-inner .carousel-content .content {
    max-width: 30rem;
    bottom: 6rem;
  }
  .GML-section .carousel-inner .carousel-content .content h3 {
    font-size: 5rem;
    margin-bottom: 3rem;
  }
  .GML-section .carousel-inner .carousel-content .content h3 span {
    right: 7rem;
    font-size: 1.2rem;
  }
  .GML-section .carousel-inner .carousel-content .content p {
    font-size: 0.9rem;
    max-width: 10rem;
  }
  .GML-section .carousel-inner .carousel-content .content button {
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
  }
  .page-banner {
    height: 30rem;
  }
  .page-banner .content h3 {
    font-size: 7rem;
    margin-bottom: 4rem;
  }
  .page-banner .content h3 span {
    right: 11rem;
    font-size: 2.5rem;
  }
  .page-banner .content p {
    font-size: 1.1rem;
    max-width: 20rem;
  }
}
@media only screen and (max-width: 991px) {
  .GML-details-content .user {
    flex-direction: column;
    align-items: flex-start;
  }
  .GML-details-content .user p {
    width: 100%;
  }
}
@media only screen and (max-width: 800px) {
  .GML-section .carousel-inner .carousel-content {
    height: 25rem;
  }
  .GML-section .carousel-inner .carousel-content .content {
    max-width: 30rem;
    bottom: 5rem;
  }
  .GML-section .carousel-inner .carousel-content .content h3 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  .GML-section .carousel-inner .carousel-content .content h3 span {
    right: 5.5rem;
    font-size: 1rem;
  }
  .GML-section .carousel-inner .carousel-content .content p {
    font-size: 0.8rem;
  }
}
@media only screen and (max-width: 767px) {
  .GML-details-content .detail-header .button-group {
    justify-content: flex-start;
  }
  .GML-details-content .detail-header h6 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .GML-details-content .detail-header h1 {
    font-size: 1.6rem;
  }
  .GML-details-content .detail-header .button-group .btn {
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
  }
  .GML-details-content .user {
    margin-top: 2rem;
    gap: 0.6rem;
  }
  .GML-details-content .user p {
    font-size: 1rem;
  }
  .GML-list .card .card-body .card-title {
    font-size: 1.2rem;
  }
  .GML-list .card .card-body .button-group .read-more-btn {
    font-size: 1.1rem;
  }
  .GML-list .card .card-body .button-group .download-btn {
    font-size: 1.1rem;
  }
}
@media only screen and (max-width: 620px) {
  .GML-section .carousel-inner .carousel-content {
    height: 20rem;
  }
  .GML-section .carousel-inner .carousel-content .content {
    max-width: 30rem;
    bottom: 5rem;
  }
  .GML-section .carousel-inner .carousel-content .content h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .GML-section .carousel-inner .carousel-content .content h3 span {
    right: 5.5rem;
    font-size: 0.8rem;
  }
  .GML-section .carousel-inner .carousel-content .content p {
    font-size: 0.7rem;
  }
  .GML-section .carousel-inner .carousel-content .content button {
    font-size: 0.6rem;
    padding: 0.2rem 0.6rem;
  }
  .page-banner {
    height: 20rem;
  }
  .page-banner .content {
    margin-left: 10rem;
  }
  .page-banner .content h3 {
    font-size: 5rem;
    margin-bottom: 3rem;
  }
  .page-banner .content h3 span {
    right: 11rem;
    font-size: 1.5rem;
  }
  .page-banner .content p {
    font-size: 0.9rem;
    max-width: 20rem;
  }
}
@media only screen and (max-width: 570px) {
  .GML-section .carousel-inner .carousel-content {
    height: 20rem;
  }
  .GML-section .carousel-inner .carousel-content::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
  }
  .GML-section .carousel-inner .carousel-content .content {
    max-width: 30rem;
    bottom: 5rem;
  }
  .GML-section .carousel-inner .carousel-content .content h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .GML-section .carousel-inner .carousel-content .content h3 span {
    right: 5.5rem;
    font-size: 0.8rem;
  }
  .GML-section .carousel-inner .carousel-content .content p {
    font-size: 0.7rem;
  }
  .GML-section .carousel-inner .carousel-content .content button {
    font-size: 0.6rem;
    padding: 0.2rem 0.6rem;
  }
}
@media only screen and (max-width: 500px) {
  .page-banner {
    height: 16rem;
  }
  .page-banner .content {
    margin-left: 7rem;
  }
  .page-banner .content h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .page-banner .content h3 span {
    right: 8rem;
    font-size: 1rem;
  }
  .page-banner .content p {
    font-size: 0.8rem;
    max-width: 15rem;
  }
  .new-GML .content h6 {
    font-size: 1rem;
  }
  .new-GML .content h4 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  .new-GML .content .button-group .btn {
    font-size: 1rem;
  }
}/*# sourceMappingURL=main.css.map */