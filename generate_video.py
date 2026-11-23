import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import imageio

# Resolution and framerate
WIDTH = 1920
HEIGHT = 1080
FPS = 24

# Output path
OUTPUT_VIDEO = r"H:\swynex\SWYNEX_Task1_Architecture_Demo.mp4"

# Load fonts
try:
    font_large_title = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 68)
    font_title = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 46)
    font_subtitle = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 32)
    font_body = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 26)
    font_small = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 22)
    font_mono = ImageFont.truetype(r"C:\Windows\Fonts\consola.ttf", 24)
    font_mono_small = ImageFont.truetype(r"C:\Windows\Fonts\consola.ttf", 20)
    font_badge = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 20)
except Exception:
    font_large_title = font_title = font_subtitle = font_body = font_small = font_mono = font_mono_small = font_badge = ImageFont.load_default()

def draw_header(draw, title_text, step_text=""):
    # Top banner background
    draw.rectangle([(0, 0), (WIDTH, 110)], fill=(13, 19, 33))
    draw.line([(0, 110), (WIDTH, 110)], fill=(37, 99, 235), width=3)
    
    # SWYNEX Brand tag
    draw.rounded_rectangle([(70, 32), (240, 78)], radius=8, fill=(37, 99, 235))
    draw.text((88, 42), "SWYNEX", fill=(255, 255, 255), font=font_subtitle)
    
    # Center task title
    draw.text((270, 44), "Task 1: Full-Stack Project Architecture", fill=(203, 213, 225), font=font_body)
    
    # Step indicator
    if step_text:
        draw.rounded_rectangle([(WIDTH - 380, 32), (WIDTH - 70, 78)], radius=8, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
        draw.text((WIDTH - 360, 44), step_text, fill=(56, 189, 248), font=font_small)

def draw_footer(draw, progress=0.0):
    # Bottom bar
    draw.rectangle([(0, HEIGHT - 70), (WIDTH, HEIGHT)], fill=(13, 19, 33))
    draw.line([(0, HEIGHT - 70), (WIDTH, HEIGHT - 70)], fill=(30, 41, 59), width=1)
    
    draw.text((70, HEIGHT - 48), "Intern: Tharun K.  |  Repository: github.com/Catdas/SWYNEX-Project-Architecture", fill=(148, 163, 184), font=font_small)
    draw.text((WIDTH - 420, HEIGHT - 48), "LinkedIn Submission Video Demo", fill=(56, 189, 248), font=font_small)
    
    # Progress bar line
    bar_width = int(WIDTH * progress)
    if bar_width > 0:
        draw.rectangle([(0, HEIGHT - 6), (bar_width, HEIGHT)], fill=(59, 130, 246))

def render_frame_scene1(t, duration):
    # Scene 1: Title & Hero
    img = Image.new("RGB", (WIDTH, HEIGHT), (10, 15, 29))
    draw = ImageDraw.Draw(img)
    
    # Background glowing radial dots
    for i in range(12):
        x = 100 + i * 160
        y = int(500 + 40 * math.sin(t * 3 + i))
        draw.ellipse([(x-3, y-3), (x+3, y+3)], fill=(37, 99, 235))
    
    draw_header(draw, "Title Scene", "OVERVIEW")
    
    # Hero Card
    card_box = [(260, 200), (WIDTH - 260, HEIGHT - 180)]
    draw.rounded_rectangle(card_box, radius=24, fill=(17, 24, 39), outline=(59, 130, 246), width=2)
    
    # Category Pill
    draw.rounded_rectangle([(320, 260), (740, 310)], radius=25, fill=(30, 58, 138), outline=(96, 165, 250), width=1)
    draw.text((345, 272), "SWYNEX TECHNOLOGIES INTERNSHIP", fill=(191, 219, 254), font=font_badge)
    
    # Main Title
    draw.text((320, 340), "TaskFlow Platform Architecture", fill=(255, 255, 255), font=font_large_title)
    
    # Subtitle
    draw.text((320, 440), "Modern Agile Workflow & Real-Time Sprint Management System", fill=(148, 163, 184), font=font_subtitle)
    
    # 3 Highlights Cards inside hero
    cards = [
        ("3-Tier Modular System", "React 18 + Node.js API + PostgreSQL + Redis", (37, 99, 235)),
        ("7 Relational Entities", "Multi-Tenant Workspaces, RBAC, Tasks & Audit Logs", (16, 185, 129)),
        ("Production Grade", "Docker Compose, JWT HMAC-SHA256, OpenAPI 3.0", (168, 85, 247))
    ]
    
    for idx, (title, desc, color) in enumerate(cards):
        cx1 = 320 + idx * 430
        cx2 = cx1 + 400
        cy1 = 530
        cy2 = 720
        draw.rounded_rectangle([(cx1, cy1), (cx2, cy2)], radius=16, fill=(24, 33, 54), outline=color, width=2)
        draw.text((cx1 + 25, cy1 + 30), title, fill=(255, 255, 255), font=font_body)
        
        # Word wrap desc
        words = desc.split(" ")
        line1 = " ".join(words[:3])
        line2 = " ".join(words[3:])
        draw.text((cx1 + 25, cy1 + 80), line1, fill=(203, 213, 225), font=font_small)
        draw.text((cx1 + 25, cy1 + 115), line2, fill=(148, 163, 184), font=font_small)
    
    draw_footer(draw, progress=t / 38.0)
    return img

def render_frame_scene2(t, duration):
    # Scene 2: Problem & Solution
    img = Image.new("RGB", (WIDTH, HEIGHT), (10, 15, 29))
    draw = ImageDraw.Draw(img)
    draw_header(draw, "Problem & Solution", "01 / PRODUCT DEFINITION")
    
    # Left Card: Problem
    draw.rounded_rectangle([(140, 180), (900, 860)], radius=20, fill=(23, 23, 35), outline=(239, 68, 68), width=2)
    draw.rounded_rectangle([(180, 220), (450, 265)], radius=8, fill=(153, 27, 27))
    draw.text((200, 230), "THE PROBLEM", fill=(255, 255, 255), font=font_small)
    
    draw.text((180, 300), "Tool Fragmentation & Friction", fill=(254, 202, 202), font=font_title)
    
    problems = [
        "• Complex legacy trackers have steep learning curves.",
        "• Basic todo apps lack multi-tenant team security.",
        "• Missing real-time sprint velocity and lead time metrics.",
        "• High friction between devs, interns, and managers."
    ]
    for idx, p in enumerate(problems):
        draw.text((180, 390 + idx * 95), p, fill=(203, 213, 225), font=font_body)
    
    # Right Card: Solution
    draw.rounded_rectangle([(980, 180), (1780, 860)], radius=20, fill=(17, 30, 42), outline=(16, 185, 129), width=2)
    draw.rounded_rectangle([(1020, 220), (1330, 265)], radius=8, fill=(6, 95, 70))
    draw.text((1040, 230), "THE TASKFLOW SOLUTION", fill=(255, 255, 255), font=font_small)
    
    draw.text((1020, 300), "Unified Agile Workflow Platform", fill=(167, 243, 208), font=font_title)
    
    solutions = [
        "• Multi-Tenant Workspaces with granular RBAC.",
        "• Interactive 5-column Kanban boards with instant drag & drop.",
        "• Automated sprint velocity & burndown analytics.",
        "• Complete immutable activity audit trails & discussions."
    ]
    for idx, s in enumerate(solutions):
        draw.text((1020, 390 + idx * 95), s, fill=(226, 232, 240), font=font_body)
    
    draw_footer(draw, progress=(6.0 + t) / 38.0)
    return img

def render_frame_scene3(t, duration):
    # Scene 3: 3-Tier System Architecture
    img = Image.new("RGB", (WIDTH, HEIGHT), (10, 15, 29))
    draw = ImageDraw.Draw(img)
    draw_header(draw, "System Architecture", "02 / 3-TIER ARCHITECTURE")
    
    # 3 Big Columns
    layers = [
        ("1. Presentation Tier", "React 18 + TypeScript SPA", [
            "• Vite build system & fast HMR",
            "• Tailwind CSS design system",
            "• TanStack Query state caching",
            "• Responsive Kanban UI & Modals"
        ], (37, 99, 235)),
        ("2. Application API Tier", "Node.js / Express REST Service", [
            "• Modular TypeScript route controllers",
            "• JWT HMAC-SHA256 authentication",
            "• Role-Based Access Control (RBAC)",
            "• Helmet & Express Rate Limiter"
        ], (16, 185, 129)),
        ("3. Storage & Cache Tier", "PostgreSQL 16 & Redis 7", [
            "• Relational ACID schema with Prisma ORM",
            "• Foreign keys & compound indexes",
            "• Redis session & velocity caching",
            "• Docker multi-container compose"
        ], (168, 85, 247))
    ]
    
    for idx, (layer_title, tech_sub, bullets, border_col) in enumerate(layers):
        x1 = 120 + idx * 560
        x2 = x1 + 520
        y1 = 190
        y2 = 820
        
        draw.rounded_rectangle([(x1, y1), (x2, y2)], radius=20, fill=(18, 26, 43), outline=border_col, width=2)
        
        # Header box
        draw.rounded_rectangle([(x1 + 20, y1 + 25), (x2 - 20, y1 + 95)], radius=12, fill=(30, 41, 59))
        draw.text((x1 + 40, y1 + 42), layer_title, fill=(255, 255, 255), font=font_body)
        
        # Tech sub
        draw.text((x1 + 40, y1 + 125), tech_sub, fill=(56, 189, 248), font=font_small)
        draw.line([(x1 + 40, y1 + 165), (x2 - 40, y1 + 165)], fill=(51, 65, 85), width=1)
        
        # Bullets
        for b_idx, b in enumerate(bullets):
            draw.text((x1 + 40, y1 + 200 + b_idx * 75), b, fill=(203, 213, 225), font=font_small)
            
        # Pulsing connector indicator
        if idx < 2:
            arr_x = x2 + 10
            arr_y = 500
            draw.text((arr_x, arr_y), "↔", fill=(96, 165, 250), font=font_title)
            
    # Bottom Note
    draw.rounded_rectangle([(120, 845), (WIDTH - 120, 895)], radius=10, fill=(30, 58, 138))
    draw.text((150, 858), "Docker Orchestration: PostgreSQL 16 + Redis 7 + Express Backend + React Frontend in docker-compose.yml", fill=(219, 234, 254), font=font_small)
    
    draw_footer(draw, progress=(12.0 + t) / 38.0)
    return img

def render_frame_scene4(t, duration):
    # Scene 4: Database Models & ERD
    img = Image.new("RGB", (WIDTH, HEIGHT), (10, 15, 29))
    draw = ImageDraw.Draw(img)
    draw_header(draw, "Database Models", "03 / RELATIONAL DATA MODELS")
    
    entities = [
        ("Users (users)", "UUID PK • email UK • password_hash • role • avatar_url", (59, 130, 246)),
        ("Workspaces (workspaces)", "UUID PK • name • slug UK • owner_id FK (Multi-tenant boundary)", (16, 185, 129)),
        ("Projects (projects)", "UUID PK • workspace_id FK • key (e.g. SWYN) • status", (245, 158, 11)),
        ("Tasks (tasks)", "UUID PK • project_id FK • task_number • status • priority • points", (239, 68, 68)),
        ("Workspace Members", "UUID PK • workspace_id FK • user_id FK • role (RBAC)", (168, 85, 247)),
        ("Comments & Audit Logs", "Threaded issue discussions + JSONB event audit stream", (236, 72, 153))
    ]
    
    # 2x3 Grid
    for idx, (title, fields, color) in enumerate(entities):
        col = idx % 2
        row = idx // 2
        x1 = 140 + col * 840
        x2 = x1 + 800
        y1 = 180 + row * 220
        y2 = y1 + 190
        
        draw.rounded_rectangle([(x1, y1), (x2, y2)], radius=16, fill=(18, 26, 43), outline=color, width=2)
        draw.text((x1 + 30, y1 + 25), title, fill=(255, 255, 255), font=font_body)
        draw.text((x1 + 30, y1 + 80), fields, fill=(148, 163, 184), font=font_mono_small)
        draw.text((x1 + 30, y1 + 130), "✔ PostgreSQL 16 ACID  •  Prisma Schema  •  B-Tree Indexed", fill=(56, 189, 248), font=font_small)
        
    draw_footer(draw, progress=(20.0 + t) / 38.0)
    return img

def render_frame_scene5(t, duration):
    # Scene 5: API Routes & Security
    img = Image.new("RGB", (WIDTH, HEIGHT), (10, 15, 29))
    draw = ImageDraw.Draw(img)
    draw_header(draw, "RESTful API & Security", "04 / API SPEC & SECURITY")
    
    # Left: API Routes Box
    draw.rounded_rectangle([(140, 180), (1050, 860)], radius=20, fill=(18, 26, 43), outline=(59, 130, 246), width=2)
    draw.text((180, 215), "Standardized RESTful Endpoints (/api/v1)", fill=(255, 255, 255), font=font_title)
    
    routes = [
        ("POST", "/api/v1/auth/register", "Account registration & bcrypt salt", (16, 185, 129)),
        ("POST", "/api/v1/auth/login", "Authentication & JWT bearer token", (16, 185, 129)),
        ("GET ", "/api/v1/workspaces", "List authenticated user workspaces", (59, 130, 246)),
        ("GET ", "/api/v1/projects/:id/tasks", "Filter by status, priority, assignee", (59, 130, 246)),
        ("PATCH", "/api/v1/tasks/:id/position", "Kanban drag-and-drop state update", (245, 158, 11)),
        ("GET ", "/api/v1/analytics/summary", "Sprint velocity & burndown metrics", (168, 85, 247))
    ]
    
    for idx, (method, path, desc, m_col) in enumerate(routes):
        ry = 295 + idx * 85
        draw.rounded_rectangle([(180, ry), (270, ry + 42)], radius=6, fill=m_col)
        draw.text((192, ry + 8), method.strip(), fill=(255, 255, 255), font=font_small)
        draw.text((290, ry + 8), path, fill=(241, 245, 249), font=font_mono_small)
        draw.text((690, ry + 8), desc, fill=(148, 163, 184), font=font_small)
        
    # Right: Security Architecture
    draw.rounded_rectangle([(1110, 180), (1780, 860)], radius=20, fill=(17, 24, 39), outline=(16, 185, 129), width=2)
    draw.text((1150, 215), "Non-Functional & Security", fill=(255, 255, 255), font=font_title)
    
    sec_items = [
        ("Stateless JWT Authentication", "HMAC-SHA256 signature with short-lived tokens."),
        ("Password Encryption", "Salted hashing with bcrypt (12 work rounds)."),
        ("Role-Based Access Control", "ADMIN, MANAGER, MEMBER, VIEWER tiers."),
        ("OWASP Hardening", "Helmet HTTP security headers & CORS origin whitelist."),
        ("DDoS Rate Limiting", "100 reqs/15m sliding window rate-limiter.")
    ]
    
    for idx, (stitle, sdesc) in enumerate(sec_items):
        sy = 295 + idx * 105
        draw.text((1150, sy), f"✔ {stitle}", fill=(52, 211, 153), font=font_body)
        draw.text((1180, sy + 40), sdesc, fill=(148, 163, 184), font=font_small)
        
    draw_footer(draw, progress=(28.0 + t) / 38.0)
    return img

def render_frame_scene6(t, duration):
    # Scene 6: Conclusion & Repository Link
    img = Image.new("RGB", (WIDTH, HEIGHT), (10, 15, 29))
    draw = ImageDraw.Draw(img)
    draw_header(draw, "Submission Ready", "05 / TASK 1 COMPLETED")
    
    # Large glowing victory card
    card_box = [(220, 180), (WIDTH - 220, 860)]
    draw.rounded_rectangle(card_box, radius=24, fill=(17, 24, 39), outline=(59, 130, 246), width=3)
    
    draw.rounded_rectangle([(280, 240), (700, 290)], radius=25, fill=(6, 95, 70), outline=(52, 211, 153), width=1)
    draw.text((310, 252), "TASK 1 READY FOR SUBMISSION", fill=(167, 243, 208), font=font_badge)
    
    draw.text((280, 320), "Full-Stack Project Architecture Finalized", fill=(255, 255, 255), font=font_large_title)
    draw.text((280, 420), "All 47 architecture blueprints, schemas, and starter boilerplates are live on GitHub.", fill=(148, 163, 184), font=font_subtitle)
    
    # Repo Box
    draw.rounded_rectangle([(280, 490), (WIDTH - 280, 600)], radius=16, fill=(15, 23, 42), outline=(96, 165, 250), width=2)
    draw.text((320, 515), "GitHub Repository URL:", fill=(148, 163, 184), font=font_small)
    draw.text((320, 545), "https://github.com/Catdas/SWYNEX-Project-Architecture", fill=(56, 189, 248), font=font_title)
    
    # Tags & Acknowledgements
    draw.text((280, 640), "Company: @SWYNEX Technologies", fill=(255, 255, 255), font=font_body)
    draw.text((280, 690), "Internship Track: Full-Stack Web Development  •  Author: Tharun K.", fill=(203, 213, 225), font=font_small)
    draw.text((280, 740), "#SWYNEX #Internship #SystemDesign #SoftwareEngineering #React #NodeJS #PostgreSQL", fill=(96, 165, 250), font=font_body)
    
    draw_footer(draw, progress=(34.0 + t) / 38.0)
    return img

def main():
    print("Generating video frames...")
    
    # Define scenes and their durations in seconds
    scenes = [
        (render_frame_scene1, 6.0),
        (render_frame_scene2, 6.0),
        (render_frame_scene3, 8.0),
        (render_frame_scene4, 8.0),
        (render_frame_scene5, 6.0),
        (render_frame_scene6, 4.0),
    ]
    
    total_duration = sum(dur for _, dur in scenes)
    total_frames = int(total_duration * FPS)
    print(f"Total video duration: {total_duration}s ({total_frames} frames at {FPS} FPS)")
    
    # Initialize video writer with imageio
    writer = imageio.get_writer(
        OUTPUT_VIDEO,
        fps=FPS,
        codec='libx264',
        quality=8,
        macro_block_size=1
    )
    
    current_frame = 0
    for scene_idx, (render_fn, duration) in enumerate(scenes):
        scene_frames = int(duration * FPS)
        print(f"Rendering Scene {scene_idx + 1}/{len(scenes)} ({scene_frames} frames)...")
        for f in range(scene_frames):
            t = f / FPS
            img = render_fn(t, duration)
            writer.append_data(np.array(img))
            current_frame += 1
            if current_frame % 50 == 0:
                print(f"  Progress: {current_frame}/{total_frames} frames ({int(current_frame/total_frames*100)}%)")
                
    writer.close()
    print(f"Video generated successfully at: {OUTPUT_VIDEO}")
    print(f"File size: {os.path.getsize(OUTPUT_VIDEO) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    main()
