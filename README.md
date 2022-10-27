<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Self 16</title>
</head>
<body>
   <div class="wrapper">
      <div class="content">
         <div id="page0" class="page0">
            <div class="content0">
               <div id="header" class="header">
                  <a href="#" class="logo_link">
                     <img src="img/logo.png" alt="icon" class="logo_img">
                  </a>
                  <nav class="nav">
                     <ul class="menu_list">
                        <li class="menu_item">
                           <a onclick="show1()" href="#" class="menu_link">page 1</a>
                        </li>
                        <li class="menu_item">
                           <a onclick="show2()" href="#" class="menu_link">page 2</a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div class="page0_title">
                  <div class="titles">
                     <p class="title_word">company</p>
                     <p class="title_word">may be</p>
                     <p class="title_word">better</p>
                  </div>
               </div>
               <div class="square">
                  <ul>
                     <li></li>
                     <li></li>
                  </ul>
               </div>
            </div>
         </div>
         <div id="page1" class="page1">
            <div id="btn01" onclick="back()" class="btn01">
               <div class="close"></div>
            </div>
            <div id="page1_title" class="page1_title">
               <p>very interesting</p>
               <h1>title</h1>
            </div>
            <div id="page1_arrows" class="page1_arrows">
               <img onclick="move()" src="img/arr1.png" alt="icon" class="arrow_img">
               <img onclick="move2()" src="img/arr2.png" alt="icon" class="arrow_img">
            </div>
            <div id="page1_img" class="page1_img">
               <div id="img1" class="little img1">
                  <img src="img/img1.jpg" alt="icon">
               </div>
               <div id="img2" class="big img2">
                  <img src="img/img2.png" alt="icon">
               </div>
               <div id="img3" class="little img3">
                  <img src="img/img3.png" alt="icon">
               </div>
            </div>
         </div>
         <div id="page2" class="page2">
            <div id="btn02" onclick="back2()" class="btn02">
               <div class="close"></div>
            </div>
            <div class="page2_content">
               <div id="page2_words" class="page2_words">
                  <p class="word">lorem</p>
                  <div class="words">
                     <p class="word">lorem</p>
                     <p class="word">lorem</p>
                  </div>
                  <p class="word">lorem</p>
               </div>
               <div id="page2_img" class="page2_img">
                  <div class="inner">
                     <div class="page2_img1">
                        <img src="img/img31.png" alt="">
                     </div>
                     <div class="page2_img2">
                        <img src="img/img32.png" alt="">
                     </div>
                  </div>
                  <div class="circle">
                     <ul>
                        <li></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <script src="js/jquery-1.9.1.min.js"></script>
   <script src="js/main.js"></script>
</body>
</html>
