import pygame

# Initialize Pygame
pygame.init()

# Set up the game window
window_width = 800
window_height = 600
window = pygame.display.set_mode((window_width, window_height))
pygame.display.set_caption("Cube Platformer")

# Set up the player cube
player_width = 50
player_height = 50
player_x = (window_width - player_width) // 2
player_y = window_height - player_height - 10
player_velocity = 5

# Set up gravity
gravity = 0.5
player_jump_power = 10
is_jumping = False
jump_count = 10

# Game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Move the player
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        player_x -= player_velocity
    if keys[pygame.K_RIGHT]:
        player_x += player_velocity
    
    # Apply gravity and jumping
    if is_jumping:
        if jump_count >= -10:
            neg = 1 if jump_count >= 0 else -1
            player_y -= (jump_count ** 2) * 0.5 * neg
            jump_count -= 1
        else:
            is_jumping = False
            jump_count = 10
    else:
        player_y += gravity
    
    # Draw the game objects
    window.fill((255, 255, 255))  # Clear the window
    pygame.draw.rect(window, (255, 0, 0), (player_x, player_y, player_width, player_height))  # Draw the player
    pygame.display.update()  # Update the display

# Quit the game
pygame.quit()
