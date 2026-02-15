<script>
  const contentSets = [
    [ // Set 1
      { text: "Set 1 - Zigzag 1 text", img: "zigzag1-set1.png" },
      { text: "Set 1 - Zigzag 2 text", img: "zigzag2-set1.png" },
      { text: "Set 1 - Zigzag 3 text", img: "zigzag3-set1.png" }
    ],
    [ // Set 2
      { text: "Set 2 - Zigzag 1 text", img: "zigzag1-set2.png" },
      { text: "Set 2 - Zigzag 2 text", img: "zigzag2-set2.png" },
      { text: "Set 2 - Zigzag 3 text", img: "zigzag3-set2.png" }
    ],
    [ // Set 3
      { text: "Set 3 - Zigzag 1 text", img: "zigzag1-set3.png" },
      { text: "Set 3 - Zigzag 2 text", img: "zigzag2-set3.png" },
      { text: "Set 3 - Zigzag 3 text", img: "zigzag3-set3.png" }
    ],
    [ // Set 4
      { text: "Set 4 - Zigzag 1 text", img: "zigzag1-set4.png" },
      { text: "Set 4 - Zigzag 2 text", img: "zigzag2-set4.png" },
      { text: "Set 4 - Zigzag 3 text", img: "zigzag3-set4.png" }
    ],
    [ // Set 5
      { text: "Set 5 - Zigzag 1 text", img: "zigzag1-set5.png" },
      { text: "Set 5 - Zigzag 2 text", img: "zigzag2-set5.png" },
      { text: "Set 5 - Zigzag 3 text", img: "zigzag3-set5.png" }
    ]
  ];

  // Attach click events to each link
  const links = document.querySelectorAll("#contentLinks a");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const setIndex = parseInt(this.dataset.set);
      const zigzags = document.querySelectorAll(".zigzag");

      zigzags.forEach((section, i) => {
        section.querySelector(".text p").textContent = contentSets[setIndex][i].text;
        section.querySelector("img").src = contentSets[setIndex][i].img;
      });
    });
  });
</script>