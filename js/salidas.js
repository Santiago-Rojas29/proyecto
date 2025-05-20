let currentRow = null;

function initModule() {
  const addMemberBtn = document.getElementById('addMemberBtn');
  const modal = document.getElementById('memberModal');
  const closeBtn = modal.querySelector('.close');
  const memberForm = document.getElementById('memberForm');
  const modalTitle = document.getElementById('modalTitle');

  addMemberBtn.addEventListener('click', () => {
    modalTitle.textContent = 'Añadir Material';
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

    const codigo = document.getElementById('codigo').value.trim();
    const elemento = document.getElementById('elemento').value.trim();
    const categoria = document.getElementById('categoria').value;
    const area = document.getElementById('area').value.trim();
    const ubicacion = document.getElementById('ubicacion').value.trim();
    const cantidad = document.getElementById('cantidad').value;
    const estado = document.getElementById('estado').value;

    if (currentRow) {
      // Editar fila existente
      currentRow.cells[0].textContent = codigo;
      currentRow.cells[1].textContent = elemento;
      currentRow.cells[2].textContent = categoria;
      currentRow.cells[3].textContent = area;
      currentRow.cells[4].textContent = ubicacion;
      currentRow.cells[5].textContent = cantidad;
      currentRow.cells[6].innerHTML = `<span class="status ${estado}">${estado === 'activo' ? 'Activo' : 'Inactivo'}</span>`;
    } else {
      // Añadir nueva fila
      const tbody = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
      const newRow = tbody.insertRow();

      newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${elemento}</td>
        <td>${categoria}</td>
        <td>${area}</td>
        <td>${ubicacion}</td>
        <td>${cantidad}</td>
        <td><span class="status ${estado}">${estado === 'activo' ? 'Activo' : 'Inactivo'}</span></td>
        <td>
          <button class="editar">Editar</button>
          <button class="eliminar">Eliminar</button>
        </td>
      `;

      // Añadir listeners a los botones nuevos
      newRow.querySelector('.editar').addEventListener('click', () => editMember(newRow));
      newRow.querySelector('.eliminar').addEventListener('click', () => deleteMember(newRow));
    }

    modal.style.display = 'none';
  });
}

function editMember(row) {
  currentRow = row;
  const cells = row.cells;
  document.getElementById('codigo').value = cells[0].textContent;
  document.getElementById('elemento').value = cells[1].textContent;
  document.getElementById('categoria').value = cells[2].textContent;
  document.getElementById('area').value = cells[3].textContent;
  document.getElementById('ubicacion').value = cells[4].textContent;
  document.getElementById('cantidad').value = cells[5].textContent;

  const estadoText = cells[6].textContent.toLowerCase();
  document.getElementById('estado').value = estadoText === 'activo' ? 'activo' : 'inactivo';

  const modal = document.getElementById('memberModal');
  const modalTitle = document.getElementById('modalTitle');
  modalTitle.textContent = 'Editar Material';
  modal.style.display = 'block';
}

function deleteMember(row) {
  if (confirm('¿Estás seguro de que deseas eliminar este material?')) {
    row.remove();
    if (currentRow === row) {
      currentRow = null;
    }
  }
}

