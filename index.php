<?php session_start(); ?>
<?php include "header.php"; ?>
<script defer type="text/javascript" src="static/js/index.js"></script>
<div class="container">
  <div class="row">
    <div class="column column-80 column-offset-10">
        <h1 style="text-align: center">Lineup</h1>
        <button class="button" style="width: 100%" onclick="sort()">Make a lineup</button>
        <hr>
        <div class="widget">
            <ol id="lineup">
            </ol>
          <button onclick="refresh()">refresh</button>
          <a href="login.php"><button>edit team</button></a>
        </div>
     </div>
  </div>
</div>
<?php include "footer.php"; ?>