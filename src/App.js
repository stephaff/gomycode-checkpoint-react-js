import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div class="container">
      <form>
      <h1 class="col-10">Informations personnelles</h1>
      <div class="row">
        <label for="name" class="col-2">Nom</label>
        <div class="col-6">
          <input type="text" class="form-control" id="name"/>
        </div>
      </div>
      <div class="row">
        <label for="name" class="col-2">Prénom(s)</label>
        <div class="col-6">
          <input type="text" class="form-control" id="name"/>
        </div>
      </div>
      <div class="row">
        <label class="col-2">Sexe</label>
        <div class="col-2">
          <input class="form-check-input" type="radio" name="sexe" id="homme"/>
          <label for="homme">Homme</label>
        </div>
        <div class="col-2">
          <input class="form-check-input" type="radio" name="sexe" id="femme"/>
          <label for="femme">Femme</label>
        </div>
      </div>
      <div class="row">
          <label for="country" class="col-2">Pays</label>
          <div class="col-6">
            <select class="form-select" aria-label="Default select example">
              <option selected>Allemagne</option>
              <option value="1">Côte d'Ivoire</option>
              <option value="2">France</option>
              <option value="3">Japon</option>
            </select>
          </div>
      </div>
      <div class="col-3 offset-6">
        <button type="submit" class="btn btn-primary">Valider</button>
      </div>
      </form>
    </div>
  );
}

export default App;
