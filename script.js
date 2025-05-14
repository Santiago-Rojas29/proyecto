
    const toggleMenuBtn = document.getElementById('toggleMenu');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const addMemberBtn = document.getElementById('addMemberBtn');
    const modal = document.getElementById('memberModal');
    const closeBtn = document.querySelector('.close');
    const memberForm = document.getElementById('memberForm');
    const modalTitle = document.getElementById('modalTitle');
    let currentRow = null;

    toggleMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      mainContent.classList.toggle('full');
    });

    addMemberBtn.addEventListener('click', () => {
      modalTitle.textContent = 'Añadir Miembro';
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
      const name = document.getElementById('name').value;
      const company = document.getElementById('company').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const city = document.getElementById('city').value;
      const status = document.getElementById('status').value;

      if (currentRow) {
        // Edit existing member
        currentRow.cells[0].textContent = name;
        currentRow.cells[1].textContent = company;
        currentRow.cells[2].textContent = phone;
        currentRow.cells[3].textContent = email;
        currentRow.cells[4].textContent = city;
        currentRow.cells[5].innerHTML = `<span class="status ${status}">${status === 'activo' ? 'Activo' : 'Inactivo'}</span>`;
      } else {
        // Add new member
        const table = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `
          <td>${name}</td>
          <td>${company}</td>
          <td>${phone}</td>
          <td>${email}</td>
          <td>${city}</td>
          <td><span class="status ${status}">${status === 'activo' ? 'Activo' : 'Inactivo'}</span></td>
          <td>
            <button class="editar" onclick="editMember(this)">Editar</button>
            <button class="eliminar" onclick="deleteMember(this)">Eliminar</button>
          </td>
        `;
      }

      modal.style.display = 'none';
    });

    function editMember(button) {
      currentRow = button.closest('tr');
      const cells = currentRow.cells;
      document.getElementById('name').value = cells[0].textContent;
      document.getElementById('company').value = cells[1].textContent;
      document.getElementById('phone').value = cells[2].textContent;
      document.getElementById('email').value = cells[3].textContent;
      document.getElementById('city').value = cells[4].textContent;
      const status = cells[5].querySelector('.status').classList.contains('activo') ? 'activo' : 'inactivo';
      document.getElementById('status').value = status;

      modalTitle.textContent = 'Editar Miembro';
      modal.style.display = 'block';
    }

    function deleteMember(button) {
      if (confirm('¿Estás seguro de que deseas eliminar este miembro?')) {
        const row = button.closest('tr');
        row.parentNode.removeChild(row);
      }
    }
    function mostrarRespuesta() {
      var seleccion = document.getElementById('opcion').value;
      var respuestaDiv = document.getElementById('respuesta');
      if (seleccion === 'primera') {
        respuestaDiv.style.display = 'block';
      } else {
        respuestaDiv.style.display = 'none';
      }
    }
