<?php include "head.php" ?>
<body class="inner catalog">
<div class="layout">
   <?php include "images/sprite.svg" ?>
   <?php include "header.php" ?>
   <main class="main">
		<div class="content-wrap">
			<div class="container">
				<div class="breadcrumb">
	   			<ul>
	   				<li><a href="/">Каталог услуг</a></li>
	   				<li>Поклейка обоев</li>
	   			</ul>
	   		</div>
				<header class="section-header">
	            <h1 class="section-title">Каталог услуг</h1>
	         </header>
				<article class="content txt-block">
					<div class="row">
						<div class="col-md-4 col-sm-4 catalog-item">
							<a href="/" class="catalog-link">
								<img src="pic/catalog/img1.jpg" alt="Поклейка обоев">
								<div class="catalog-title">Поклейка обоев</div>
							</a>
							<ul>
								<li><a href="/">Поклейка бумажных обоев</a></li>
								<li><a href="/">Поклейка флизелиновых обоев</a></li>
								<li><a href="/">Поклейка виниловых обоев</a></li>
								<li><a href="/">Поклейка текстильных обоев</a></li>
								<li><a href="/">Поклейка бесшовных обоев</a></li>
								<li><a href="/">Поклейка фрески</a></li>
							</ul>
						</div>
						<div class="col-md-4 col-sm-4 catalog-item">
							<a href="/" class="catalog-link">
								<img src="pic/catalog/img2.jpg" alt="Поклейка обоев">
								<div class="catalog-title">Декоративные работы</div>
							</a>
							<ul>
								<li><a href="/">Поклейка фотообоев</a></li>
								<li><a href="/">Поклейка линкрусты с подготовкой шва под покраску	</a></li>
								<li><a href="/">Поклейка обоев из соломы и бамбука	</a></li>
								<li><a href="/">Поклейка обоев со стеклярусом</a></li>
								<li><a href="/">Поклейка металлизированных обоев</a></li>
							</ul>
						</div>
						<div class="col-md-4 col-sm-4 catalog-item">
							<a href="/" class="catalog-link">
								<img src="pic/catalog/img3.jpg" alt="Поклейка обоев">
								<div class="catalog-title">Услуги</div>
							</a>
							<ul>
								<li><a href="/">Поклейка обоев с покрытием</a></li>
								<li><a href="/">Поклейка разделительного бордюра</a></li>
								<li><a href="/">Грунтование  стен (включая  грунтовку  сегмента «Премиум»)</a></li>
							</ul>
						</div>
					</div>	
				</article>
			</div>
		</div>
		<section class="contact">
         <div class="container">
            <header class="section-header">
               <h2 class="section-title section-title__w">Закажите обратный звонок</h2>
            </header>
            <form action="#" class="contact-form reveal-anim">
               <div class="row">
                  <div class="col-md-6">
                     <div class="form-group">
                        <input type="text" name="uname" class="uname" placeholder="Представьтесь">
                     </div>
                     <div class="form-group">
                        <input type="text" name="uphone" class=uphone placeholder="Ваш номер телефона">
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="form-group">
                        <textarea class="ucomment" placeholder="Комментарий"></textarea>
                     </div>
                  </div>
                  <div class="col-md-12 submit-wrap">
                     <input type="submit" class="btn btn-submit" value="Перезвоните мне">
                  </div>
               </div>
            </form>
         </div>
      </section>
	 </main>
   <?php include "footer.php" ?>