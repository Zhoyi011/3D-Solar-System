// script.js (已修复版本)
// 太阳系数据（已整理：保证每个行星是独立对象，添加地球）
const solarSystemData = {
  sun: {
    name: "太阳",
    radius: 20,
    color: 0xffff00,
    rotationSpeed: 0.004,
    textureUrl: "assets/2k_sun.jpg",
    description: "太阳是太阳系的中心天体，占据了太阳系总质量的99.86%。",
    composition: "氢(73.46%)、氦(24.85%)、氧(0.77%)、碳(0.29%)、铁(0.16%)等",
    age: "约46亿年",
    distance: "距地球约1.496亿公里（1天文单位）",
    facts: "太阳每秒钟释放的能量相当于1000亿颗氢弹爆炸的能量。"
  },
  planets: [
    {
      name: "水星",
      radius: 3.8,
      color: 0x8a8a8a,
      distance: 40,
      orbitSpeed: 0.04,
      rotationSpeed: 0.004,
      textureUrl: "assets/2k_mercury.jpg",
      description: "水星是太阳系中最小、最靠近太阳的行星，没有卫星。",
      composition: "岩石和金属（主要是铁）",
      orbit: "公转周期：88天；自转周期：59天",
      temperature: "昼夜温差极大，白天可达430°C，夜间可低至-180°C",
      facts: "水星的一天（自转周期）相当于地球的59天；水星上的一年只有88个地球日。"
    },
    {
      name: "金星",
      radius: 9.5,
      color: 0xe39e1c,
      distance: 70,
      orbitSpeed: 0.015,
      rotationSpeed: 0.002,
      textureUrl: "assets/2k_venus_surface.jpg",
      description: "金星是太阳系中第二颗行星，也是天空中最亮的自然天体之一。",
      composition: "厚重的二氧化碳大气层，地表主要是火山岩",
      orbit: "公转周期：225天；自转周期：243天（逆向自转）",
      temperature: "表面温度高达465°C，是太阳系中最热的行星",
      facts: "金星的大气压力是地球的92倍；自转方向与其他行星相反。"
    },
    {
      // 新增地球条目（之前数据里没地球）
      name: "地球",
      radius: 10,
      color: 0x2a6fdb,
      distance: 100,
      orbitSpeed: 0.01,
      rotationSpeed: 0.02,
      textureUrl: "assets/2k_earth_daymap.jpg",
      description: "地球是我们居住的行星，拥有液态水和适合生命的环境。",
      composition: "岩石和金属，水与大气层",
      orbit: "公转周期：365天；自转周期：24小时",
      temperature: "平均温度约14°C",
      facts: "地球拥有一个天然卫星——月球。",
      moons: [
        {
          name: "月球",
          radius: 2.7,
          color: 0xcccccc,
          distance: 15,
          orbitSpeed: 0.05,
          rotationSpeed: 0.01,
          textureUrl: "assets/2k_moon.jpg"
        }
      ]
    },
    {
      name: "火星",
      radius: 7.5,
      color: 0xc1440e,
      distance: 150,
      orbitSpeed: 0.008,
      rotationSpeed: 0.018,
      textureUrl: "assets/2k_mars.jpg",
      description: "火星，俗称红色行星，表面有广泛的铁氧化物尘土。",
      composition: "岩石，主要为硅酸盐和铁氧化物",
      orbit: "公转周期：687天；自转周期：24.6小时",
      temperature: "平均温度：-63°C",
      facts: "火星上有太阳系最高的山脉奥林匹斯山。",
      moons: [
        {
          name: "火卫一",
          radius: 1.5,
          color: 0xaaaaaa,
          distance: 10,
          orbitSpeed: 0.04,
          rotationSpeed: 0.01
        },
        {
          name: "火卫二",
          radius: 1,
          color: 0x999999,
          distance: 13,
          orbitSpeed: 0.05,
          rotationSpeed: 0.01
        }
      ]
    },
    {
      name: "木星",
      radius: 19.8,
      color: 0xd8ca9d,
      distance: 230,
      orbitSpeed: 0.002,
      rotationSpeed: 0.04,
      textureUrl: "assets/2k_jupiter.jpg",
      description: "木星是太阳系中最大的行星，主要由氢和氦组成。",
      composition: "主要由氢(90%)和氦(10%)组成",
      orbit: "公转周期：11.86年；自转周期：9.93小时",
      temperature: "云层顶部温度约-145°C",
      facts: "木星有著名的大红斑和强大的磁场。",
      moons: [
        {
          name: "木卫一",
          radius: 2,
          color: 0xdddddd,
          distance: 25,
          orbitSpeed: 0.03,
          rotationSpeed: 0.01
        },
        {
          name: "木卫二",
          radius: 1.8,
          color: 0xcccccc,
          distance: 30,
          orbitSpeed: 0.04,
          rotationSpeed: 0.01
        }
      ]
    },
    {
      name: "土星",
      radius: 16.5,
      color: 0xe3e0c0,
      distance: 340,
      orbitSpeed: 0.0009,
      rotationSpeed: 0.038,
      textureUrl: "assets/2k_saturn.jpg",
      description: "土星以其壮观的环系统著称。",
      composition: "主要由氢和氦组成",
      orbit: "公转周期：29.46年；自转周期：10.7小时",
      temperature: "云层顶部温度约-178°C",
      facts: "土星的环主要由冰粒子和岩石碎片组成。",
      rings: {
        innerRadius: 20,
        outerRadius: 30,
        textureUrl: "assets/2k_saturn_ring_alpha.png",
        color: 0xc2b99d
      },
    },
    {
      name: "天王星",
      radius: 14.5,
      color: 0x5580aa,
      distance: 450,
      orbitSpeed: 0.0004,
      rotationSpeed: 0.03,
      textureUrl: "assets/2k_uranus.jpg",
      description: "天王星的自转轴几乎与公转平面垂直，像在“翻滚”。",
      composition: "主要由氢、氦和甲烷组成",
      orbit: "公转周期：84.01年；自转周期：17.24小时",
      temperature: "云层顶部温度约-224°C",
      facts: "天王星呈蓝绿色，具有多个环系统。",
      tilt: Math.PI / 2
    },
    {
      name: "海王星",
      radius: 14,
      color: 0x366896,
      distance: 550,
      orbitSpeed: 0.0001,
      rotationSpeed: 0.032,
      textureUrl: "assets/2k_neptune.jpg",
      description: "海王星是太阳系中最远的行星，以深蓝色著称。",
      composition: "主要由氢、氦和甲烷组成",
      orbit: "公转周期：164.8年；自转周期：16.11小时",
      temperature: "云层顶部温度约-218°C",
      facts: "海王星有强烈的风暴系统。"
    }
  ],
  asteroidBelt: {
    innerRadius: 180,
    outerRadius: 220,
    count: 1000
  }
};

// 页面加载完成后初始化
window.addEventListener('load', init);

// 全局变量
let scene, camera, renderer, controls, milkyWay;
let sun, planets = [], orbits = [];
let rotationEnabled = true;
let orbitLinesVisible = true;
let selectedObject = null;
let sunLight = null;

// 创建太阳
function createSun() {
  const sunGeometry = new THREE.SphereGeometry(solarSystemData.sun.radius, 32, 32);
  let sunMaterial;
  if (solarSystemData.sun.textureUrl) {
    sunMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(solarSystemData.sun.textureUrl)
    });
  } else {
    sunMaterial = new THREE.MeshBasicMaterial({
      color: solarSystemData.sun.color
    });
  }
  sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.name = solarSystemData.sun.name;
  scene.add(sun);
}

// 创建行星
function createPlanets() {
  solarSystemData.planets.forEach(planetData => {
    const planetGeometry = new THREE.SphereGeometry(planetData.radius, 32, 32);
    let planetMaterial;
    if (planetData.textureUrl) {
      planetMaterial = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load(planetData.textureUrl)
      });
    } else {
      planetMaterial = new THREE.MeshStandardMaterial({
        color: planetData.color
      });
    }
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.name = planetData.name;

    // 创建行星组（用于围绕太阳公转）
    const planetGroup = new THREE.Group();
    planet.position.x = planetData.distance; // 行星相对组的位置
    planetGroup.add(planet);
    scene.add(planetGroup);

    // 存到数组里以便动画更新
    planets.push({
      mesh: planet,
      group: planetGroup,
      data: planetData
    });

    // 创建轨道线（用RingGeometry）
    const orbitGeometry = new THREE.RingGeometry(Math.max(0.1, planetData.distance - 0.1), planetData.distance + 0.1, 128);
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2
    });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2;
    orbit.position.y = 0;
    scene.add(orbit);
    orbits.push(orbit);

    // 如果有卫星，创建卫星（把卫星放在行星 mesh 上）
    if (planetData.moons) {
      planetData.moons.forEach(moonData => {
        const moonGeometry = new THREE.SphereGeometry(moonData.radius, 16, 16);
        let moonMaterial;
        if (moonData.textureUrl) {
          moonMaterial = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load(moonData.textureUrl)
          });
        } else {
          moonMaterial = new THREE.MeshStandardMaterial({
            color: moonData.color
          });
        }
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.position.x = moonData.distance;
        moon.name = moonData.name || "moon";
        // 把 moonData 存到 userData，便于在动画中引用（不要用 radius 去匹配）
        moon.userData = { moonData };
        planet.add(moon); // 卫星添加到行星 mesh 上（相对于行星位置旋转）
      });
    }

    // 如果是土星，创建土星环（把环添加到行星 mesh 上）
    if (planetData.name === "土星" && planetData.rings) {
      const ringGeometry = new THREE.RingGeometry(planetData.rings.innerRadius, planetData.rings.outerRadius, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(planetData.rings.textureUrl),
        side: THREE.DoubleSide,
        transparent: true
      });
      const rings = new THREE.Mesh(ringGeometry, ringMaterial);
      rings.rotation.x = Math.PI / 2;
      rings.name = "saturnRings";
      planet.add(rings);
    }
  });
}

// 创建小行星带
function createAsteroidBelt() {
  const asteroidBeltGroup = new THREE.Group();
  const asteroidCount = solarSystemData.asteroidBelt.count;
  const innerRadius = solarSystemData.asteroidBelt.innerRadius;
  const outerRadius = solarSystemData.asteroidBelt.outerRadius;

  for (let i = 0; i < asteroidCount; i++) {
    const asteroidGeometry = new THREE.SphereGeometry(Math.random() * 0.5 + 0.1, 8, 8);
    const asteroidMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888
    });
    const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * (outerRadius - innerRadius) + innerRadius;
    asteroid.position.x = Math.cos(angle) * radius;
    asteroid.position.z = Math.sin(angle) * radius;
    asteroid.position.y = Math.random() * 20 - 10;

    asteroidBeltGroup.add(asteroid);
  }
  scene.add(asteroidBeltGroup);
}

// 创建星空背景
function createStarBackground() {
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
    sizeAttenuation: false
  });

  const starsVertices = [];
  for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000);
    const y = THREE.MathUtils.randFloatSpread(2000);
    const z = THREE.MathUtils.randFloatSpread(2000);
    starsVertices.push(x, y, z);
  }

  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
  const starField = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starField);
}

// 初始化场景
function init() {
  // 创建场景
  scene = new THREE.Scene();

  // 创建相机
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 20000);
  camera.position.set(0, 150, 400);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  document.body.appendChild(renderer.domElement);

  // 添加轨道控制
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // 添加环境光
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  // 先创建太阳（太阳在场景原点）
  createSun();

  // 创建太阳光并放到太阳位置（确保在创建太阳后）
  sunLight = new THREE.PointLight(0xffffff, 1.5, 10000);
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);

  // 创建行星、小行星带和星空
  createPlanets();
  createAsteroidBelt();
  createStarBackground();

  // 创建银河系背景（大球体放后面）
  const milkyWayGeometry = new THREE.SphereGeometry(20000, 64, 64);
  const milkyWayMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/8k_stars.jpg'),
    side: THREE.BackSide,
    color: 0xffffff
  });
  milkyWay = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);
  milkyWay.visible = false;
  scene.add(milkyWay);

  // 添加窗口大小调整监听
  window.addEventListener('resize', onWindowResize);

  // 添加控制按钮事件（这些函数在本文件底部已实现）
  document.getElementById('toggleRotation').addEventListener('click', toggleRotation);
  document.getElementById('toggleOrbits').addEventListener('click', toggleOrbits);
  document.getElementById('resetCamera').addEventListener('click', resetCamera);

  // 添加点击事件监听器
  setupClickListener();

  // 开始动画循环
  animate();
}

// 设置点击事件监听器
function setupClickListener() {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  renderer.domElement.addEventListener('click', function(event) {
    event.preventDefault();

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    let foundCelestialBody = false;

    for (let i = 0; i < intersects.length; i++) {
      const object = intersects[i].object;

      // 太阳检测
      if (object === sun) {
        selectedObject = sun;
        showPlanetInfo(solarSystemData.sun);
        foundCelestialBody = true;
        break;
      }

      // 行星检测（查找 planets 数组匹配 mesh 或 group）
      for (let j = 0; j < planets.length; j++) {
        if (object === planets[j].mesh) {
          selectedObject = planets[j].mesh;
          showPlanetInfo(planets[j].data);
          foundCelestialBody = true;
          break;
        }
        // 点击到卫星（moon）——我们在创建时把 moon 加到 planet.mesh，并把 moon.userData.moonData 设置好
        if (object.userData && object.userData.moonData) {
          selectedObject = object;
          showPlanetInfo(object.userData.moonData);
          foundCelestialBody = true;
          break;
        }
      }

      if (foundCelestialBody) break;
    }

    // 没点到任何天体，隐藏信息面板
    if (!foundCelestialBody) {
      const panel = document.getElementById('planetInfo');
      if (panel && panel.style.display === 'block') {
        panel.style.display = 'none';
        selectedObject = null;
      }
    }
  });
}

// 显示星球信息
function showPlanetInfo(data) {
  console.log("显示星球信息:", data.name);

  const planetInfo = document.getElementById('planetInfo');
  const content = document.getElementById('planetInfoContent');

  let html = `
    <h2>${data.name}</h2>
    <div class="info-section">
      <p>${data.description || '暂无描述'}</p>
    </div>
  `;

  html += `<div class="info-section"><h3>基本信息</h3>`;

  if (data.composition) {
    html += `<p><strong>成分：</strong>${data.composition}</p>`;
  }

  if (data.orbit) {
    html += `<p><strong>轨道：</strong>${data.orbit}</p>`;
  }

  if (data.temperature) {
    html += `<p><strong>温度：</strong>${data.temperature}</p>`;
  }

  // 注意：data.distance 在这里是模拟单位（不是实际百万公里），仅作展示
  if (data.distance && data !== solarSystemData.sun) {
    html += `<p><strong>距太阳：</strong>约${data.distance}（模拟单位）</p>`;
  }

  if (data.age) {
    html += `<p><strong>年龄：</strong>${data.age}</p>`;
  }

  html += `</div>`;

  if (data.facts) {
    html += `
    <div class="info-section">
      <h3>有趣的事实</h3>
      <p>${data.facts}</p>
    </div>`;
  }

  if (data.moons && data.moons.length > 0) {
    html += `
    <div class="info-section">
      <h3>卫星</h3>
      <ul>`;
    data.moons.forEach(moon => {
      html += `<li><strong>${moon.name}</strong>`;
      if (moon.description) html += `<p>${moon.description}</p>`;
      if (moon.facts) html += `<p>${moon.facts}</p>`;
      html += `</li>`;
    });
    html += `</ul></div>`;
  }

  content.innerHTML = html;
  planetInfo.style.display = 'block';

  // 只设置一次关闭行为，避免多次绑定
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.onclick = function() {
      planetInfo.style.display = 'none';
      selectedObject = null;
    };
  }
}

// 窗口大小调整
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);

  // 太阳自转
  if (sun && rotationEnabled) {
    sun.rotation.y += solarSystemData.sun.rotationSpeed;
  }

  // 行星自转和公转
  planets.forEach(planet => {
    if (rotationEnabled) {
      planet.mesh.rotation.y += planet.data.rotationSpeed;
      planet.group.rotation.y += planet.data.orbitSpeed;
    }

    // 卫星自转和公转（使用 userData 中的 moonData）
    planet.mesh.children.forEach(child => {
      if (child.isMesh && child.userData && child.userData.moonData) {
        const moonData = child.userData.moonData;
        if (moonData && rotationEnabled) {
          child.rotation.y += moonData.rotationSpeed || 0;
          // 卫星绕行星公转（绕着行星的局部坐标）
          const angle = planet.group.rotation.y * (moonData.orbitMultiplier || 5);
          child.position.x = moonData.distance * Math.cos(angle);
          child.position.z = moonData.distance * Math.sin(angle);
        }
      }

      // 土星环（用名称判断更稳健）
      if (child.isMesh && child.name === "saturnRings") {
        child.rotation.z += 0.005;
      }
    });
  });

  // 更新轨道控制器
  controls.update();

  // 根据相机距离控制 milkyWay 的可见性
  const distance = camera.position.length();
  if (milkyWay) {
    milkyWay.visible = distance > 1000;
  }

  // 让太阳光始终跟随太阳位置（如果以后太阳移动）
  if (sunLight && sun) {
    sunLight.position.copy(sun.position);
  }

  renderer.render(scene, camera);
}

// 按钮功能：暂停/继续自转
function toggleRotation() {
  rotationEnabled = !rotationEnabled;
  document.getElementById('toggleRotation').textContent = rotationEnabled ? '暂停/继续自转' : '暂停/继续自转';
}

// 按钮功能：显示/隐藏轨道线
function toggleOrbits() {
  orbitLinesVisible = !orbitLinesVisible;
  orbits.forEach(o => {
    o.visible = orbitLinesVisible;
  });
  document.getElementById('toggleOrbits').textContent = orbitLinesVisible ? '显示/隐藏轨道' : '显示/隐藏轨道';
}

// 按钮功能：重置相机
function resetCamera() {
  camera.position.set(0, 150, 400);
  controls.target.set(0, 0, 0);
  controls.update();
}
