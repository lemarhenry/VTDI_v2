navBar = () => {
    let id = document.querySelector("#navbar") || null;
    //   you can change the contents of what is stored inside of the nav variable
    let nav = `<!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark aqua-gradient navbar sticky-top ">
  
    <!-- Navbar brand -->
    <div>
    <a class="" href="/index.html">
    <img src="https://firebasestorage.googleapis.com/v0/b/fenntech-79b71.appspot.com/o/Portfolio%20Img%2FVTDI-Logo.png?alt=media&token=75c31634-66f6-4137-a33e-08ec45624097" height="60" alt="VTDI Logo">
    </a>
    </div>
    <!-- Collapse button -->
    
    <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse"
    data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false"
    aria-label="Toggle navigation"><span class="white-text"><i class="fas fa-bars fa-1x"></i></span></button>

  
    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="basicExampleNav">
  
      <!-- Links -->
      <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
      <a class="nav-link" href="/">Home </a>
    </li>
        <li class="nav-item">
          <a class="nav-link " href="/about_us.html">About </a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Faculty & Staff
        </a>
        <div class="dropdown-menu dropdown-default" -labelledby="navbarDropdownMenuLink-333">
          <a class="dropdown-item" href="/senior_staff_kgn.html">Kingston</a>
          <a class="dropdown-item" href="/senior_staff_mdv.html">Mandeville (Extention Site)</a>
          <a class="dropdown-item" href="/senior_staff_mbay.html">Montego Bay (Extention Site)</a>
        </div>
      </li>
        
        <li class="nav-item">
        <a class="nav-link" href="#">Programmes </a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/contact_us.html">Contact Us</a>
    </li>
      </ul>

      <a href="https://isims.heart-nta.org/apply/" type="button" class="btn btn-outline-primary btn-rounded waves-effect">Apply Here</a>
      <!-- Links -->
  
      
    </div>
    <!-- Collapsible content -->
  
  </nav>
  <!--/.Navbar-->`;
    id.innerHTML = nav;
};

PrincipalsMessage =() =>{
  let id = document.querySelector("#message") || null;

  let message =`<div class="container my-5 z-depth-1">


  <!--Section: Content-->
  <section class="dark-grey-text">

    <div class="row pr-lg-5">
      <div class="col-md-7 mb-4">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/graphics(4).png" class="img-fluid" alt="smaple image">
        </div>

      </div>
      <div class="col-md-5 d-flex align-items-center">
        <div>
          
          <h3 class="font-weight-bold mb-4 mt-2">Principal's Message</h3>

  <!--Section: Content-->

  <!--Accordion wrapper-->
  <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
  
    <!-- Accordion card -->
    <div class="card">
  
      <!-- Card header -->
      <div class="card-header" role="tab" id="headingOne1">
        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
          aria-controls="collapseOne1">
          <h5 class="mb-0">
            Collapsible Group Item #1 <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
      <!-- Card body -->
      <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
        <div class="card-body">
        The Vocational Training Development Institute(VTDI) has a strong
         reputation for providing quality technical vocational education
          and training programmes both locally and in the Caribbean.
           Having been established in 1970, the institution boasts a 
           fine cadre of diverse and highly qualified staff and has 
           established its reputation as a leader in the field of 
           technical vocational education and training (TVET). It 
           is driven by the mission of providing quality TVET programmes 
           that will prepare competent graduates for the world of work,
         with the capacity to contribute to national development.
        </div>
      </div>
  
    </div>
    <!-- Accordion card -->
  
    <!-- Accordion card -->
    <div class="card">
  
      <!-- Card header -->
      <div class="card-header" role="tab" id="headingTwo2">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
          aria-expanded="false" aria-controls="collapseTwo2">
          <h5 class="mb-0">
            Collapsible Group Item #2 <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
      <!-- Card body -->
      <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
        <div class="card-body">
        Programmes are offered at the main campus at Gordon Town Road, Kingston,
         and at two extension sites - one in Mandeville and the other in Montego Bay,
          at the Montego Bay Community College located in western Jamaica. 
          The main campus is nestled in the lush green hills of Gordon Town 
          and is neighbour to other tertiary institutions such as the University of the West Indies,
           and the University of Technology, Jamaica.
        </div>
      </div>
  
    </div>
    <!-- Accordion card -->
  
    <!-- Accordion card -->
    <div class="card">
  
      <!-- Card header -->
      <div class="card-header" role="tab" id="headingThree3">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
          aria-expanded="false" aria-controls="collapseThree3">
          <h5 class="mb-0">
            Collapsible Group Item #3 <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
      <!-- Card body -->
      <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
        <div class="card-body">
        We offer a wide range of technical and professional programs for school leavers,
         TVET leaders, administrators, technicians, and those seeking new career paths.
          As a VTDI student, you will be accorded the greatest level of professionalism,
           and be immersed in structured learning activities that are engaging,
            mentally inspiring, and that encourages and motivates you to be a life-long learner. 
            Our student-centered, self-paced approach to the design and delivery of instructions, 
            will afford a learning environment that is conducive to meeting your learning needs. 
            If you are not already a student of the VTDI, consider making that decision today! You will not regret it.
        </div>
      </div>
      <div class="fixed-action-btn smooth-scroll" style="bottom: 45px; right: 24px;">
        <a href="#navbar" class="btn-floating btn-large red">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
      
  
    </div>
    <!-- Accordion card -->
  
  </div>
  <!-- Accordion wrapper -->
  </section>
</div>`
id.innerHTML =message;
}



Footer = () => {
    let id = document.querySelector("#footer") || null;
    //   you can change the contents of what is stored inside of the footer variable
    let footer = `
<!-- Footer -->
<footer class="page-footer font-small elegant-color pt-4">

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Footer links -->
    <div class="row text-center text-md-left mt-3 pb-3">

    

      <hr class="w-100 clearfix d-md-none">
      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Prospective Students</h6>
        <p>
          <a class="text-primary"href="https://vtdi.heart-nta.org/Portals/0/year%201.pdf">Tuition Information</a>
        </p>
        <p>
          <a class="text-primary"href="https://vtdi.heart-nta.org/Portals/0/English%20Proficiency%20Test%20Information%20Boolet%202014.pdf">English Proficiency Test Booklet</a>
        </p>
        <p>
          <a class="text-primary"href="https://vtdi.heart-nta.org/Portals/0/VTDI%20-%20Student%20Handbook%202019-2021%20final_mar19.pdf?ver=2020-06-22-124703-760">VTDI Student Handbook</a>
        </p>
       
      </div>
      <!-- Grid column -->


      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Current Students</h6>
        <p>
          <a class="text-primary"href="https://docs.google.com/forms/d/e/1FAIpQLSfizqsO_QKX11EHvYpZ1ukJC2ZjbEfNeeyTVH_cUgwCRGn4jQ/closedform">Apply to be a Part-Time Lab Assistant</a>
        </p>
        <p>
          <a class="text-primary"href="https://heart.mlasolutions.com/oasis/catalog/(S(55jb0y553ghuoba21dlkgi45))/default.aspx?installation=vtdi">Library Resources</a>
        </p>
        <p>
          <a class="text-primary"href="https://vtdi.heart-nta.org/Portals/0/year%202-3.pdf">Tuition Information</a>
        </p>
        <p>
          <a class="text-primary"href="https://vtdi.heart-nta.org/Portals/0/Sum%20Semester%202016-17-1%200%20-%20Reg%20Schedule.pdf">Registration Schedule (Semester 3)</a>
        </p>
      </div>
      <!-- Grid column -->

      <hr class="w-100 clearfix d-md-none">

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">General Information</h6>
        <p>
          <a class="text-primary"href="https://docs.google.com/forms/d/e/1FAIpQLSeEa1c8u0A5bQam1z4etchXyuYjL8izMAHIvk-gFvPBn6rH7A/viewform">Mentorship Programme</a>
        </p>
        <p>
          <a class="text-primary"href="https://issuu.com/vtdidistanceeducationunit/docs/vtdi_prog._2017_observer__2___revis">Programmes 2020-2022</a>
        </p>
        <p>
          <a class="text-primary"href="#!">Calendar</a>
        </p>
        <p>
          <a class="text-primary"href="#!">Download Application Form</a>
        </p>
      </div>

      <!-- Grid column -->
      <hr class="w-100 clearfix d-md-none">

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i class="fas fa-home mr-3"></i> Gordon Town Road, Kingston</p>
        <p>
          <i class="fas fa-envelope mr-3"></i> vtdi@heart-nta.org</p>
        <p>
          <i class="fas fa-phone mr-3"></i> Kingston Campus (876) 977-1700</p>
        <p>
        <p>
        <i class="fas fa-phone mr-3"></i> Mandeville Campus (876) 961 -5881</p>
      <p>
      <p>
      <i class="fas fa-phone mr-3"></i> Montego Bay Campus (876) 436-0748</p>
   
      
      </div>
      <!-- Grid column -->

    </div>
    <!-- Footer links -->

    <hr>

    <!-- Grid row -->
    <div class="row d-flex align-items-center">

      <!-- Grid column -->
      <div class="col-md-7 col-lg-8">

        <!--Copyright-->
        <p class="text-center text-md-left">© 2020 Copyright:
          <a href="#">
            <strong> Vocational Training Development Institute</strong>
          </a>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-5 col-lg-4 ml-lg-0">

        <!-- Social buttons -->
        <div class="text-center text-md-right">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

</footer>
<!-- Footer -->`
    id.innerHTML = footer;
};

navBar();
Footer();
PrincipalsMessage();