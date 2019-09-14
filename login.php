<?php session_start(); ?>
<?php include "header.php"; ?>
<script defer type="text/javascript" src="static/js/manage.js"></script>
<div class="container">
  <div class="row">
    <div class="column column-80 column-offset-10">
<div class="widget"><h1>Team Manager Login</h1></div>
<hr>

<?php
$pass = getenv('JSJPASS');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (! empty($_POST) && isset($_POST['pwd']) && $_POST['pwd'] == $pass) {
    $_SESSION["valid"] = "yes";
    header("Location: manage.php");
    } else {
      echo "<h1>WRONG!</h1>";
    }
 } else {
        echo <<<EOL
        <div class="widget">
        <h2>Manager Login</h2>
        <form action="" method="post">
        <input type="text" name="pwd" placeholder="Super Secret Password" required>
        <input type="submit" value="Submit">
        </form>
        </div>
EOL;
      }
?>

</div>
    </div>
</div>
<?php include "footer.php"; ?>