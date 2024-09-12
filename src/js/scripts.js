document.addEventListener("DOMContentLoaded", function () {
    const terminalBody = document.getElementById("terminal-body");
    const userInput = document.getElementById("userInput");
  
    let typed = new Typed(".typed-text", {
      strings: ["Welcome. Either type -h or help for current commands"],
      typeSpeed: 40,
    });
  
    const commands = {
      "-a": "about",
      about: "about",
      "-h": "help",
      ls: "help",
      help: "help",
      "-s": "skills",
      skills: "skills",
      "-p": "papers",
      papers: "papers",
      "-pro": "projects",
      projects: "projects",
      "-c": "contact",
      contact: "contact",
      "-cert": "certificates",
      certificates: "certificates",
      "-wo": "workshops",
      workshops: "workshops",
      clear: "clear",
      cls: "clear",
      "-m":"musics",
      musics:"musics"
    };
  
    userInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const command = userInput.value.toLowerCase().trim();
        userInput.value = ""; // Clear input after pressing Enter
  
        const terminalRow = document.createElement("div");
        terminalRow.classList.add("col");
  
        const terminalCol1 = document.createElement("div");
        terminalCol1.classList.add("col");
        terminalCol1.innerHTML = '<span class="typed-text"></span>';
        terminalRow.appendChild(terminalCol1);
  
        terminalBody.appendChild(terminalRow);
  
        const selectedCommand = commands[command];
        if (selectedCommand) {
          processCommand(selectedCommand);
        } else {
          addOutputToTerminal(
            'Command not recognized. Type "help" for available commands.'
          );
        }
      }
    });
  
    function addOutputToTerminal(output) {
      const newLine = document.createElement("div");
  
      // Checking if output is a string or an element
      if (typeof output === "string") {
        newLine.innerHTML = output;
      } else {
        newLine.appendChild(output);
      }
  
      terminalBody.lastElementChild.firstElementChild.appendChild(newLine);
      userInput.focus();
    }
  
    function processCommand(input) {
      switch (input) {
        case "help":
          clearTerminal();
          addOutputToTerminal("Available commands:");
          addOutputToTerminal("-a or about");
          addOutputToTerminal("-h or ls or help");
          addOutputToTerminal("-s or skills");
          addOutputToTerminal("-p or papers");
          addOutputToTerminal("-pro or projects");
          addOutputToTerminal("-c or contact");
          addOutputToTerminal("-cert or certificates");
          addOutputToTerminal("-wo or workshops");
          addOutputToTerminal("-m or musics")
          addOutputToTerminal("cls or clear");
  
          break;
  
        case "about":
          clearTerminal();
          addOutputToTerminal(
            "I am Parsa Besharat, an IT Engineer, Senior back-end developer and Data Scientist. I grew up in Karaj, Iran, with an amazing and supportive family who encouraged my interest in computers. I started my bachelors on Oct 1. 2018 in the major of Computer Engineering and did some work, implemented some projects, and formed some workshops and conferences. My interest in computers is especially in Networks Artificial Intelligence and Professional Data Analysis. Therefore I have decided to continue my studies in fundamentals of Mathematics in Data Science and resources at TUBAF University. Still, I am working on the majors I have started and working on some projects and I am thankful to TUBAF University for giving me the chance to prove myself, also to seek new technology, and be useful in any kind of major."
          );
          
          addOutputToTerminal('<br/>')
          addOutputToTerminal('<h4>Work Experiences:</h4>');
          addOutputToTerminal('<hr/>');
  
         
    // First Experience
    addOutputToTerminal("<h4><b>● SAPCO, Tehran, Tehran Province, Iran — On-site</b></h4>");
    addOutputToTerminal(
      "│ Data Scientist<br>│ Dec 2022 - Sep 2023 · 10 mos<br>│ • Developed a new strategy for Human Resources<br>│ • Implemented a new financial way to control the costs of each transportation.<br>│ • Analyzed data for the emergency portal of the transportation system.<br>│ • Formed study courses and HPC analysis workflows.<br>│ • Analyzed effective teaching methods for various subjects.<br>│ • Developed predictive models using machine learning to forecast sales.<br>│ • Collaborated with IT to integrate AI capabilities.<br>│ • Published research on customer behavior patterns.<br>│ • Led a natural language processing project.<br>│ Skills: PyTorch · SQL · IT Infrastructure · Data Science · SEO · Power BI · Data Engineering · RStudio · Computing · Google Data Studio · TensorFlow · Keras · Data Mining · Data Modeling · Business Insights · Statistical Data Analysis · Analytics · Tableau · Python · Business Intelligence (BI)<br>"
    );
  
    addOutputToTerminal('<hr/>'); // Divider line between experiences
  
    // Third Experience
    addOutputToTerminal("<h4><b>● ApexTeam, Karaj, Alborz Province, Iran — Hybrid</b></h4>");
    addOutputToTerminal(
      "│ Data Scientist<br>│ May 2020 - May 2022 · 2 yrs 1 mo<br>│ • Developed predictive models for stock market trends.<br>│ • Performed customer segmentation for marketing.<br>│ • Analyzed athlete and team performance data for coaching strategies.<br>│ • Conducted risk assessment and prediction using statistical analysis.<br>│ • Monitored environmental impacts and sustainability with data analysis.<br>│ Skills: MariaDB · SEO · Data Engineering · Data Warehousing · RStudio · Google Data Studio · PostgreSQL · TensorFlow · Keras · Data Mining · Data Modeling · Web Servers · Business Insights · Statistical Data Analysis · Analytics · Tableau · Python<br>"
    );
  
    addOutputToTerminal('<hr/>'); // Divider line between experiences
  
    // Fifth Experience
    addOutputToTerminal("<h4><b>● Islamic Azad University, Karaj, Alborz Province, Iran — On-site</b></h4>");
    addOutputToTerminal(
      "│ Research Assistant<br>│ Feb 2019 - Sep 2019 · 8 mos<br>│ • Implemented Huffman coding in multiple programming languages.<br>│ • Developed a MySQL web-based database system.<br>│ • Analyzed machine codes.<br>│ • Created simulation environments for wireless testing using Python.<br>│ • Organized data from sensors and IoT devices with Python and R.<br>│ • Designed algorithms for facial recognition software.<br>│ Skills: SQL · IT Infrastructure · Computer Information Systems · Statistical Data Analysis · Informatics<br>"
    );
  
    addOutputToTerminal('<hr/>'); // Divider line between experiences
  
  
          break;
  
        case "skills":
          clearTerminal();
          addOutputToTerminal(
            "HTML&CSS, PHP, Python, Java, Perl, Bash, Jupyter Notebook, MySQL, SQL Server, Oracle, Nginx, Jenkins, Kerio, Zabbix, Splunk, Burp suite, Metasploit, Redis, Docker, Git, REST API, Power BI, Quartus, Cisco Packet Tracer, Windows Server, Linux"
          );
          break;
  
        case "papers":
          clearTerminal();
  
  
          addOutputToTerminal("<h4><b>AI and Blockchain, Enhancing Security, Transparency, and Integrity</b></h4>");
          addOutputToTerminal("This article will guide through the merging of AI and Blockchain which nurtures an environment where data integrity is preserved, operational transparency is heightened, and security is greatly strengthened, laying the groundwork for more reliable and resilient digital infrastructures.")
  
          const downloadLink00 = document.createElement("a");
          downloadLink00.href = "https://github.com/parsabe/parsabe/blob/main/articles/AI%20and%20Blockchain%2C%20Enhancing%20Security%2C%20Transparency%2C%20and%20Integrity_Parsa_besharat_69365.pdf"; // Replace with the actual file path or URL
          downloadLink00.textContent = "Visit Document";
          downloadLink00.className='btn btn-outline-success';
          // Specify the file name with extension
          addOutputToTerminal('<br/>')
          addOutputToTerminal(downloadLink00);
  
          addOutputToTerminal('<hr/>')
  
  
          addOutputToTerminal("<h4><b>Huffman Algorithm</b></h4>");
          addOutputToTerminal(
            "This article will direct you to Huffman Algorithm, which are well-known in data compression that serves the purpose of generating Huffman codes."
          );
  
          const downloadLink0 = document.createElement("a");
          downloadLink0.href = "https://github.com/parsabe/parsabe/blob/main/articles/Huffman%20Algorithm.pdf"; // Replace with the actual file path or URL
          downloadLink0.textContent = "Visit Document";
          // Specify the file name with extension
          downloadLink0.className='btn btn-outline-success';
          addOutputToTerminal('<br/>')
          addOutputToTerminal(downloadLink0);
           addOutputToTerminal('<hr/>')
  
          addOutputToTerminal("<h4><b>An analysis on Vulnerability appraisals in web</b></h4>");
          addOutputToTerminal(
            "This article will direct you to the most proficient method to get your site against normal PHP weaknesses."
          );
  
          const downloadLink = document.createElement("a");
          downloadLink.href = "https://github.com/parsabe/parsabe/blob/main/articles/Vulterabilites%20in%20Web.pdf"; // Replace with the actual file path or URL
          downloadLink.textContent = "Visit Document";
   // Specify the file name with extension
   
   downloadLink.className='btn btn-outline-success';
   addOutputToTerminal('<br/>')
   addOutputToTerminal(downloadLink);
    addOutputToTerminal('<hr/>')
  
          addOutputToTerminal("<h4><b>Data mining Usage in CRM</b></h4>");
          addOutputToTerminal(
            "This article describes how recent advancements in data technology and the internet have led to a significant shift in communication and advertising strategies."
          );
  
          const downloadLink2 = document.createElement("a");
          downloadLink2.href = "https://github.com/parsabe/parsabe/blob/main/articles/dm%20in%20crm.pdf"; // Replace with the actual file path or URL
          downloadLink2.textContent = "Visit Document";
          
          downloadLink2.className='btn btn-outline-success';
          addOutputToTerminal('<br/>')
          addOutputToTerminal(downloadLink2);
          addOutputToTerminal('<hr/>')
  
          addOutputToTerminal("<h4><b>Synergy of Blockchain</b></h4>");
          addOutputToTerminal(
            "This essay explores the synergy between blockchain and artificial intelligence (AI), showcasing their transformative potential in various industries."
          );
  
          const downloadLink3 = document.createElement("a");
          downloadLink3.href = "https://github.com/parsabe/parsabe/blob/main/articles/blockchain.pdf"; // Replace with the actual file path or URL
          downloadLink3.textContent = "Visit Document";
          
          
          downloadLink3.className='btn btn-outline-success';
          addOutputToTerminal('<br/>')
          addOutputToTerminal(downloadLink3);
          addOutputToTerminal('<hr/>')
  
          addOutputToTerminal("<h4><b>QCA</b></h4>");
          addOutputToTerminal(
            "This essay explores the Quantum-dot Cellular Automata (QCA) which emerges as a groundbreaking concept, marking a paradigm shift from traditional transistor-based computing to quantum-level data manipulation.");
  
          const downloadLink33 = document.createElement("a");
          downloadLink33.href = "https://github.com/parsabe/parsabe/blob/main/articles/qca.pdf"; // Replace with the actual file path or URL
          downloadLink33.textContent = "Visit Document";
          
          downloadLink33.className='btn btn-outline-success';
          addOutputToTerminal('<br/>')
          addOutputToTerminal(downloadLink33);
           addOutputToTerminal('<hr/>')
  
  
          break;
  
        case "projects":
          clearTerminal();
          addOutputToTerminal("<h4><b>Hounaar Toolkit</b></h4>");
          addOutputToTerminal(
            "This project is a Python script which presents services such as Data Analysis AI, Type Rover, Net Scanner, Rootkit Scanner, YouTube Downloader, and Cryptocurrencies price checker."
          );
          
  
     
  
          const downloadLink22 = document.createElement("a");
          downloadLink22.href = "https://github.com/parsabe/HounaarToolkit"; // Replace with the actual file path or URL
          downloadLink22.textContent = "Documentation";
          downloadLink22.className= "btn btn-outline-primary";
          
          addOutputToTerminal('<br/>')
  
          addOutputToTerminal(downloadLink22);
  
          addOutputToTerminal('<hr/>')
  
  
          addOutputToTerminal("<h4><b>Parsai</b></h4>");
          addOutputToTerminal(
            "Parsai combines a powerful VS Code extension and a Telegram bot to provide versatile coding assistance using OpenAIs GPT-4."
          );
  
          const downloadLink21 = document.createElement("a");
          downloadLink21.href = "https://github.com/parsabe/Parsai"; // Replace with the actual file path or URL
          downloadLink21.textContent = "Documentation";
          downloadLink21.className= "btn btn-outline-primary";
          addOutputToTerminal('<br/>')
  
          addOutputToTerminal(downloadLink21);
  
          addOutputToTerminal('<hr/>');
  
          
    addOutputToTerminal("<h4><b>MLMatrix</b></h4>");
          addOutputToTerminal(
            "This repository features four in-depth articles covering a range of cutting-edge technologies and their applications. Explore the fascinating intersections of my data science projects."
          );
          const downloadLink202 = document.createElement("a");
          downloadLink202.href = "https://github.com/parsabe/MLMatrix"; // Replace with the actual file path or URL
          downloadLink202.textContent = "Documentation";
          downloadLink202.className= "btn btn-outline-primary";
          
          addOutputToTerminal('<br/>')
  
          addOutputToTerminal(downloadLink202);
  
          addOutputToTerminal('<hr/>')
  
  
  
  
  
   addOutputToTerminal("<h4><b>NetNexus</b></h4>");
          addOutputToTerminal(
            "A collection of innovative web projects including a dynamic website, an engaging online riddle game, a social media platform, and a chat portal. Explore creative solutions and interactive experiences."
          );
          const downloadLink102 = document.createElement("a");
          downloadLink102.href = "https://github.com/parsabe/NetNexus"; // Replace with the actual file path or URL
          downloadLink102.textContent = "Documentation";
          downloadLink102.className= "btn btn-outline-primary";
          
          addOutputToTerminal('<br/>')
  
          addOutputToTerminal(downloadLink102);
  
          addOutputToTerminal('<hr/>')
  
  
  
  
  
  
  
  
  
          
          
  
          addOutputToTerminal("<h4><b>PHPortal</b></h4>");
          addOutputToTerminal(
            "PHPortal is a lightweight PHP library that provides a simple and consistent interface for working with various database systems, including MySQL, SQL Server, and Oracle."
          );
          const downloadLink23 = document.createElement("a");
          downloadLink23.href = "https://github.com/parsabe/PHPortal"; // Replace with the actual file path or URL
          downloadLink23.textContent = "Documentation";
          downloadLink23.className= "btn btn-outline-primary";
          addOutputToTerminal('<br/>')
  
          addOutputToTerminal(downloadLink23);
  
          addOutputToTerminal('<hr/>');
  
  
  
  
  
          addOutputToTerminal("<h4><b>Huffman Algorithm</b></h4>");
          addOutputToTerminal(
            "This task is the Huffman algorithm written in Py, PHP, C++, Perl, Java, and Js programming languages which will implement Huffman algorithm to a text."
          );
          const downloadLink24 = document.createElement("a");
          downloadLink24.href = "https://github.com/parsabe/huffman"; // Replace with the actual file path or URL
          downloadLink24.textContent = "Documentation";
          downloadLink24.className= "btn btn-outline-primary";
          addOutputToTerminal('<br/>')
  
          addOutputToTerminal(downloadLink24);
  
          addOutputToTerminal('<hr/>');
  
          break;
  
        case "contact":
          clearTerminal();
          const links = [
            { href: "mailto:parsabe99@outlook.com", text: "Email" },
            { href: "https://www.linkedin.com/in/parsabe/", text: "LinkedIn" },
            { href: "https://github.com/parsabe", text: "GitHub" },
          ];
  
          links.forEach((link) => {
            const downloadLink = document.createElement("a");
            downloadLink.href = link.href;
            downloadLink.textContent = link.text;
            downloadLink.style.display = "block"; // Makes each link appear on a new line
  
            addOutputToTerminal(downloadLink); // Assuming this function adds the link to the terminal or desired output area
          });
  
          break;
  
        case "certificates":
          clearTerminal();
          addOutputToTerminal("Automated Machine Learning - Udemy");        addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("Machine Learning using AWS - Udemy");        addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("Deep learning in Python - Udemy");        addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("Big Data implementation - Udemy");        addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("SEO Fundamentals - Cando Training Center");        addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("Microsoft MCSE - Cando Training Center");        addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("CompTIA Network+ - Cando Training Center");        addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("CISCO CCNA - Cando Training Center");        addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("Power BI Automation - Udemy");        addOutputToTerminal("<hr/>");
  
  
          break;
  
        case "workshops":
          clearTerminal();
       
          addOutputToTerminal("<h5><b>SCM (April 2023)</b></h5>");
          addOutputToTerminal(
            "Small and Medium-Sized Enterprises (SMEs) have major difficulties in implementing Supply Chain Management (SCM) strategy."
          );
          addOutputToTerminal("<hr/>");
  
  
  
          addOutputToTerminal("<h4><b>STP Protocol (Sep 2022)</b></h4>");
          addOutputToTerminal(
            "STP is an organization convention that forms a circle free coherent geography for Ethernet organizations."
          );
          addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("<h4><b>ADDS Fundamentals (Dec 2022)</b></h4>");
          addOutputToTerminal(
            "Active Directory Domain Services (AD DS) provide the cornerstone of identity and access solutions in Windows Server 2016."
          );
  
          addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("<h4><b>Project Managing (July 2022)</b></h4>");
          addOutputToTerminal(
            "It’s been said for a purpose to accomplish, a good inducement. In this workshop, I have explained these sufficient ways."
          );
          addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("<h4><b>SEO Algorithms (Oct 2022)</b></h4>");
          addOutputToTerminal(
            "Search Engine Optimization (SEO) is the most common way of working on the quality and amount of site traffic."
          );
          addOutputToTerminal("<hr/>");
  
          addOutputToTerminal("<h4><b>QCA (April 2019)</b></h4>");
          addOutputToTerminal(
            "I have explained in this workshop about an abstract model of quantum computing that is similar to the typical models of cellular automata."
          );
  
          addOutputToTerminal("<hr/>");
  
          break;
  
          case "musics":
            clearTerminal();
            // Adding the music embed iframe
            const musicIframe = document.createElement("iframe");
            musicIframe.style.borderRadius = "12px";
            musicIframe.src =
              "https://open.spotify.com/embed/playlist/3UZ2YKsrUQpSwY54p6Zjgf?utm_source=generator";
            musicIframe.width = "100%";
            musicIframe.height = "352";
            musicIframe.frameBorder = "0";
            musicIframe.allowFullscreen = true;
            musicIframe.allow =
              "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
            musicIframe.loading = "lazy";
      
            addOutputToTerminal(musicIframe);
            break;
        
        case "clear":
          clearTerminal();
          break;
        default:
          addOutputToTerminal(
            'Command not recognized. Type "help or -h" for available commands.'
          );
          break;
      }
    }
  
    function clearTerminal() {
      const userInput = document.getElementById("userInput");
  
      // Clear terminal output
      terminalBody.innerHTML = "";
  
      // Restore the input field within the same row
      const terminalRow = document.createElement("div");
      terminalRow.classList.add("col");
  
      const terminalCol1 = document.createElement("div");
      terminalCol1.classList.add("col");
      terminalCol1.innerHTML = '<span class="typed-text"></span><br/>';
      terminalRow.appendChild(terminalCol1);
  
      const terminalCol2 = document.createElement("div");
      terminalCol2.classList.add("col");
      terminalCol2.innerHTML =
        '<span class="terminaler"><b>(root@hounaar) - # </b></span>';
      terminalCol2.appendChild(userInput);
      terminalRow.appendChild(terminalCol2);
  
      terminalBody.appendChild(terminalRow);
  
      // Place cursor in the input field
      userInput.focus();
    }
  });
  
