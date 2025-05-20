document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = document.getElementById('toggleMenu');
  const sidebar = document.getElementById('sidebar');
  const navItems = document.querySelectorAll('.nav-item, .submenu-item');
  const modules = document.querySelectorAll('.module');
  const navGroups = document.querySelectorAll('.nav-group');

  // Alternar colapso del sidebar
  toggleMenu.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-collapsed');
  });

  // Marcar como activo el ítem clicado
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Desplegar submenús solo si sidebar está expandido
  navGroups.forEach(group => {
    const btn = group.querySelector('.has-submenu');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!sidebar.classList.contains('sidebar-collapsed')) {
          group.classList.toggle('open');
        }
      });
    }
  });
});

function loadModule(htmlPath, jsPath = null) {
  fetch(htmlPath)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;

      if (jsPath) {
        const script = document.createElement('script');
        script.src = jsPath;
        script.type = 'text/javascript';
        script.onload = () => {
          if (typeof window.initModule === 'function') {
            window.initModule();
          }
        };
        script.onerror = () => {
          console.warn(`No se pudo cargar el script del módulo: ${jsPath}`);
        };

        document.body.appendChild(script);
      }
    })
    .catch(err => console.warn("Algo salió mal al cargar el módulo.", err));
}