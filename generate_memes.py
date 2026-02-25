import os

# 1. 设置文件夹路径（这里假设脚本和 gifs 文件夹在同一级目录）
folder_path = './gifs'

# 2. 支持的图片格式
valid_extensions = ('.gif', '.jpg', '.jpeg', '.png', '.webp')

# 检查文件夹是否存在
if not os.path.exists(folder_path):
    print(f"❌ 找不到 '{folder_path}' 文件夹，请确保路径正确！")
    exit()

# 获取所有图片文件
files = [f for f in os.listdir(folder_path) if f.lower().endswith(valid_extensions)]

if not files:
    print(f"⚠️ 在 '{folder_path}' 里没有找到任何图片。")
    exit()

meme_images_array = []

print(f"🔍 找到 {len(files)} 个图片文件，开始处理...\n")

# 为了防止多次运行脚本导致重命名冲突，我们先给所有文件加个临时前缀
temp_files = []
for f in files:
    old_path = os.path.join(folder_path, f)
    temp_name = "temp_prefix_" + f
    temp_path = os.path.join(folder_path, temp_name)
    os.rename(old_path, temp_path)
    temp_files.append(temp_name)

# 3. 正式重命名并生成数组
for index, filename in enumerate(temp_files):
    # 获取文件后缀名 (比如 .gif)
    ext = os.path.splitext(filename)[1].lower()
    
    # 构建最终的新文件名 (meme_1, meme_2 ...)
    new_name = f"meme_{index + 1}{ext}"
    
    # 完整的旧路径和新路径
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    
    # 重命名文件
    os.rename(old_path, new_path)
    
    # 将新路径按 JS 数组格式保存
    meme_images_array.append(f'    "gifs/{new_name}"')

# 4. 拼接成最终的 JavaScript 代码
js_code = "const memeImages = [\n" + ",\n".join(meme_images_array) + "\n];"

print("✅ 处理完成！请把下面这段代码复制并替换掉 script.js 里的同名数组：\n")
print("-" * 40)
print(js_code)
print("-" * 40)