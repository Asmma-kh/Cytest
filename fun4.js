const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01ABCDEF";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(35, 35, 35, 0.8)";;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255,255,255,0.8)";;
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(drawMatrix, 35);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    /*     matrix done */
    document.getElementById("loginForm").addEventListener("submit", function(e){
      e.preventDefault(); // منع تحديث الصفحة
      
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // تحقق مبدئي (يمكن ربطه بباك اند لاحقاً)
      if(username === "admin" && password === "1234" ||
         username === "user" && password === "1234" ||
          username === "user1" && password === "1234" ||
           username === "user2" && password === "1234" ||
            username === "user3" && password === "1234" ||
             username === "user4" && password === "1234" ||
        username === "bdr" && password === "1234"){
        window.location.href = "service.html"; 
      } else {
        alert("❌ اسم المستخدم أو كلمة المرور غير صحيحة");
      }

    });
