function house(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

    // Draw the main rectangle for the house body
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x, y, size, size);

    // Draw the door
        ctx.fillStyle = 'brown';
        ctx.fillRect(x + size / 4, y + size / 2, size / 4, size / 2);

    // Draw the roof
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size / 2, y - size / 2);
        ctx.lineTo(x + size, y);
        ctx.closePath();
        ctx.fillStyle = 'orange';
        ctx.fill();
      }
