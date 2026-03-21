import { useEffect, useRef, useState } from "react";

const canvasWidth = 760;
const canvasHeight = 440;
const paddleWidth = 120;
const paddleHeight = 14;
const ballRadius = 8;
const brickRows = 5;
const brickColumns = 9;
const brickWidth = 70;
const brickHeight = 24;
const brickPadding = 10;
const brickOffsetTop = 56;
const brickOffsetLeft = 28;

type Brick = {
  x: number;
  y: number;
  visible: boolean;
};

type GameStatus = "ready" | "playing" | "game-over" | "won";

function createBricks() {
  return Array.from({ length: brickRows }, (_, row) =>
    Array.from({ length: brickColumns }, (_, column) => ({
      x: brickOffsetLeft + column * (brickWidth + brickPadding),
      y: brickOffsetTop + row * (brickHeight + brickPadding),
      visible: true,
    })),
  );
}

export function ArcanoidGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const redirectTimeoutRef = useRef<number | null>(null);
  const paddleXRef = useRef((canvasWidth - paddleWidth) / 2);
  const ballPositionRef = useRef({ x: canvasWidth / 2, y: canvasHeight - 78 });
  const ballVelocityRef = useRef({ x: 4.2, y: -4.2 });
  const bricksRef = useRef<Brick[][]>(createBricks());
  const directionRef = useRef({ left: false, right: false });
  const [status, setStatus] = useState<GameStatus>("ready");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const resetBall = () => {
      ballPositionRef.current = { x: canvasWidth / 2, y: canvasHeight - 78 };
      ballVelocityRef.current = { x: 4.2, y: -4.2 };
      paddleXRef.current = (canvasWidth - paddleWidth) / 2;
    };

    const restartGame = () => {
      bricksRef.current = createBricks();
      directionRef.current = { left: false, right: false };
      resetBall();
      setStatus("ready");
    };

    const handlePrimaryAction = () => {
      if (status === "ready") {
        setStatus("playing");
      }

      if (status === "game-over") {
        restartGame();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        handlePrimaryAction();
      }

      if (event.key === "ArrowLeft") {
        directionRef.current.left = true;
      }

      if (event.key === "ArrowRight") {
        directionRef.current.right = true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        directionRef.current.left = false;
      }

      if (event.key === "ArrowRight") {
        directionRef.current.right = false;
      }
    };

    const handlePointerMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relativeX = ((event.clientX - rect.left) / rect.width) * canvasWidth;
      paddleXRef.current = Math.max(
        0,
        Math.min(canvasWidth - paddleWidth, relativeX - paddleWidth / 2),
      );
    };

    const handlePointerStart = () => {
      handlePrimaryAction();
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const relativeX = ((touch.clientX - rect.left) / rect.width) * canvasWidth;
      paddleXRef.current = Math.max(
        0,
        Math.min(canvasWidth - paddleWidth, relativeX - paddleWidth / 2),
      );
    };

    const drawBackground = () => {
      const gradient = context.createLinearGradient(0, 0, canvasWidth, canvasHeight);
      gradient.addColorStop(0, "#17110f");
      gradient.addColorStop(1, "#231914");
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvasWidth, canvasHeight);
    };

    const drawBricks = () => {
      bricksRef.current.forEach((row, rowIndex) => {
        row.forEach((brick, columnIndex) => {
          if (!brick.visible) {
            return;
          }

          context.fillStyle =
            rowIndex % 2 === 0
              ? `rgba(${255 - rowIndex * 12}, ${162 - columnIndex * 6}, 109, 0.95)`
              : `rgba(${244 - columnIndex * 10}, ${207 - rowIndex * 8}, 153, 0.95)`;
          context.beginPath();
          context.roundRect(brick.x, brick.y, brickWidth, brickHeight, 8);
          context.fill();
        });
      });
    };

    const drawPaddle = () => {
      context.fillStyle = "#fff5e7";
      context.beginPath();
      context.roundRect(
        paddleXRef.current,
        canvasHeight - 34,
        paddleWidth,
        paddleHeight,
        999,
      );
      context.fill();
    };

    const drawBall = () => {
      context.fillStyle = "#ff9a6a";
      context.beginPath();
      context.arc(
        ballPositionRef.current.x,
        ballPositionRef.current.y,
        ballRadius,
        0,
        Math.PI * 2,
      );
      context.fill();
    };

    const drawHud = () => {
      context.fillStyle = "rgba(255, 245, 231, 0.88)";
      context.font = '600 14px "IBM Plex Sans", sans-serif';
      context.fillText("Move with mouse or arrow keys", 28, 28);

      const remainingBricks = bricksRef.current.flat().filter((brick) => brick.visible).length;
      context.textAlign = "right";
      context.fillText(`Bricks left: ${remainingBricks}`, canvasWidth - 28, 28);
      context.textAlign = "left";
    };

    const drawOverlay = () => {
      if (status === "playing") {
        return;
      }

      context.fillStyle = "rgba(10, 8, 7, 0.58)";
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.fillStyle = "#fff5e7";
      context.textAlign = "center";
      context.font = '700 42px "Fraunces", serif';
      context.fillText(
        status === "ready"
          ? "Press Space or click to start"
          : status === "won"
            ? "You cleared the wall!"
            : "Game over",
        canvasWidth / 2,
        canvasHeight / 2 - 14,
      );
      context.font = '500 17px "IBM Plex Sans", sans-serif';
      context.fillText(
        status === "ready"
          ? "Then move with the mouse or arrow keys"
          : status === "won"
            ? "Redirecting to home..."
            : "Press Space or click to try again",
        canvasWidth / 2,
        canvasHeight / 2 + 28,
      );
      context.textAlign = "left";
    };

    const update = () => {
      if (status === "playing") {
        if (directionRef.current.left) {
          paddleXRef.current = Math.max(0, paddleXRef.current - 7);
        }

        if (directionRef.current.right) {
          paddleXRef.current = Math.min(canvasWidth - paddleWidth, paddleXRef.current + 7);
        }

        ballPositionRef.current.x += ballVelocityRef.current.x;
        ballPositionRef.current.y += ballVelocityRef.current.y;

        if (
          ballPositionRef.current.x + ballRadius >= canvasWidth ||
          ballPositionRef.current.x - ballRadius <= 0
        ) {
          ballVelocityRef.current.x *= -1;
        }

        if (ballPositionRef.current.y - ballRadius <= 0) {
          ballVelocityRef.current.y *= -1;
        }

        const paddleTop = canvasHeight - 34;
        const ballBottom = ballPositionRef.current.y + ballRadius;
        if (
          ballBottom >= paddleTop &&
          ballBottom <= paddleTop + paddleHeight + 6 &&
          ballPositionRef.current.x >= paddleXRef.current &&
          ballPositionRef.current.x <= paddleXRef.current + paddleWidth &&
          ballVelocityRef.current.y > 0
        ) {
          const relativeHit = (ballPositionRef.current.x - paddleXRef.current) / paddleWidth;
          ballVelocityRef.current.x = (relativeHit - 0.5) * 9;
          ballVelocityRef.current.y = -Math.abs(ballVelocityRef.current.y);
        }

        if (ballPositionRef.current.y + ballRadius > canvasHeight) {
          setStatus("game-over");
        }

        let remainingBricks = 0;

        bricksRef.current.forEach((row) => {
          row.forEach((brick) => {
            if (!brick.visible) {
              return;
            }

            remainingBricks += 1;

            const hitX =
              ballPositionRef.current.x + ballRadius > brick.x &&
              ballPositionRef.current.x - ballRadius < brick.x + brickWidth;
            const hitY =
              ballPositionRef.current.y + ballRadius > brick.y &&
              ballPositionRef.current.y - ballRadius < brick.y + brickHeight;

            if (hitX && hitY) {
              brick.visible = false;
              ballVelocityRef.current.y *= -1;
              remainingBricks -= 1;
            }
          });
        });

        if (remainingBricks === 0) {
          setStatus("won");
          if (!redirectTimeoutRef.current) {
            redirectTimeoutRef.current = window.setTimeout(() => {
              window.location.href = "/";
            }, 900);
          }
        }
      }

      drawBackground();
      drawBricks();
      drawPaddle();
      drawBall();
      drawHud();
      drawOverlay();

      animationRef.current = window.requestAnimationFrame(update);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("mousemove", handlePointerMove);
    canvas.addEventListener("click", handlePointerStart);
    canvas.addEventListener("touchstart", handlePointerStart, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });

    animationRef.current = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("mousemove", handlePointerMove);
      canvas.removeEventListener("click", handlePointerStart);
      canvas.removeEventListener("touchstart", handlePointerStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, [status]);

  return (
    <section className="game-shell">
      <div className="game-copy">
        <p className="eyebrow">Canvas game</p>
        <h1>Arcanoid</h1>
        <p>
          Inspired by the brick-breaker lineage popularized in arcades, especially
          Taito&apos;s 1986 Arkanoid, which evolved the older Breakout formula into a
          faster, flashier action game.
        </p>
      </div>
      <div className="game-frame">
        <canvas
          className="game-canvas"
          height={canvasHeight}
          ref={canvasRef}
          width={canvasWidth}
        />
      </div>
    </section>
  );
}
