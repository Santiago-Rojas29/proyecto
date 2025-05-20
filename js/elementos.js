
if (addMemberBtn && modal && closeBtn && memberForm && modalTitle) {
  addMemberBtn.addEventListener('click', () => {
    modalTitle.textContent = 'Añadir Materiales';
    memberForm.reset();
    modal.style.display = 'block';
    currentRow = null;
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  memberForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const codigo = document.getElementById('codigo').value;
    const elemento = document.getElementById('elemento').value;
    const categoria = document.getElementById('categoria').value;
    const area = document.getElementById('area').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const encargado = document.getElementById('encargado').value;
    const cantidad = document.getElementById('cantidad').value;
    const estado = document.getElementById('estado').value;

    if (currentRow) {
      currentRow.cells[0].textContent = codigo;
      currentRow.cells[1].textContent = elemento;
      currentRow.cells[2].textContent = categoria;
      currentRow.cells[3].textContent = area;
      currentRow.cells[4].textContent = ubicacion;
      currentRow.cells[5].textContent = encargado;
      currentRow.cells[6].textContent = cantidad;
      currentRow.cells[7].innerHTML = `<span class="status ${estado}">${estado === 'activo' ? 'Activo' : 'Inactivo'}</span>`;
    } else {
      const table = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();
      newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${elemento}</td>
        <td>${categoria}</td>
        <td>${area}</td>
        <td>${ubicacion}</td>
        <td>${encargado}</td>
        <td>${cantidad}</td>
        <td><span class="status ${estado}">${estado === 'activo' ? 'Activo' : 'Inactivo'}</span></td>
        <td>
          <button class="editar" onclick="editMember(this)">Editar</button>
          <button class="eliminar" onclick="deleteMember(this)">Eliminar</button>
        </td>
      `;
    }

    modal.style.display = 'none';
  });
}


function editMember(button) {
  currentRow = button.closest('tr');
  const cells = currentRow.cells;
  document.getElementById('codigo').value = cells[0].textContent;
  document.getElementById('elemento').value = cells[1].textContent;
  document.getElementById('categoria').value = cells[2].textContent;
  document.getElementById('area').value = cells[3].textContent;
  document.getElementById('ubicacion').value = cells[4].textContent;
  document.getElementById('encargado').value = cells[5].textContent;
  document.getElementById('cantidad').value = cells[6].textContent;
  
  const estadoText = cells[7].textContent.toLowerCase();
  document.getElementById('estado').value = estadoText === 'activo' ? 'activo' : 'inactivo';

  const modal = document.getElementById('memberModal');
  const modalTitle = document.getElementById('modalTitle');
  modalTitle.textContent = 'Editar Material';
  modal.style.display = 'block';
}



function deleteMember(button) {
  if (confirm('¿Estás seguro de que deseas eliminar este material?')) {
    const row = button.closest('tr');
    row.parentNode.removeChild(row);
  }
}

function mostrarRespuesta() {
  const seleccion = document.getElementById('opcion').value;
  const respuestaDiv = document.getElementById('respuesta');
  respuestaDiv.style.display = seleccion === 'primera' ? 'block' : 'none';
}

