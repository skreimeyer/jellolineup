<?php session_start(); ?>
<?php include "header.php"; ?>
<script defer type="text/javascript" src="static/js/manage.js"></script>
<div class="container">
  <div class="row">
    <div class="column column-80 column-offset-10">
<div class="widget"><h1>Team Manager Page</h1></div>
<hr>
<?php
if (isset($_SESSION["valid"])) {
  $team = file_get_contents('static/JelloRoster.json');
  echo "<script>roster = $team</script>";
  echo <<<EOL
  <button class="button" onclick="save()" style="width: 100%" id="savebutton">Save changes</button>
  <a href="/" ><button class="button" style="width: 100%">Return</button></a>
  <div class="row">
  <div class="column" id="left-dash">
    <div class="widget" id="add">
    <h3>Add a Member</h3>

      <label for="newMember">Name</label>
      <input type="text" name="name" id="newMember" placeholder="New Member">
      <label for="newGender">Gender</label>
      <select id="newGender">
      <option>guy</option>
      <option>doll</option>
      </select>
      <label for="newPower">Power</label>
      <select id="newPower">
      </select>
      <label for="newTech">Technique</label>
      <select id="newTech">
      </select>
      <label for="newSpeed">Speed</label>
      <select id="newSpeed">
      </select>
      <button onclick="addMember(); refresh()">add</button>


    </div>
    <div class="widget" id="delete">
    <h3>Remove a Member</h3>

      <select name="delMember" id="delMember">
      </select>
      <button onclick="remove(); refresh()">remove</button>

    </div>
    <div class="widget" id="update">
    <h3>Update Name & Stats</h3>

      <select name="update" id="upMember">
      </select>
      </select>
      <label for="upName">Name</label>
      <input type="text" id="upName" placeholder="New Name">
      <label for="upPower">Power</label>
      <select id="upPower">
      </select>
      <label for="upTech">Technique</label>
      <select id="upTech">
      </select>
      <label for="upSpeed">Speed</label>
      <select id="upSpeed">
      </select>
      <button onclick="update(); refresh()">update</button>

    </div>
  </div>
  <div class="column" id="right-dash">
    <h3>Team Members</h3>
    <div id="memberTable">
    <table id="placeHolderTable">
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Power</th>
      <th>Technique</th>
      <th>Speed</th>
    </tr>
    </table>
    </div>
  </div>
  </div>
EOL;
} else {
  echo "you must <a href=\"login.php\">login</a>";
}

?>

        </div>
    </div>
</div>
<?php include "footer.php"; ?>
