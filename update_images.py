import os
import re


def update_image_list():
    # Path to your past events directory
    events_dir = "./past events"

    # Get all image files
    image_files = [
        f
        for f in os.listdir(events_dir)
        if f.lower().endswith((".webp", ".jpg", ".jpeg", ".png", ".gif"))
    ]

    # Sort files by date (assuming filenames contain dates) or alphabetically
    image_files.sort(reverse=True)

    # Read the current JavaScript file
    with open("./js/main.js", "r", encoding="utf-8") as f:
        js_content = f.read()

    # Create the new array string
    array_items = ",\n            ".join(f"'{file}'" for file in image_files)
    new_array = f"""        const pastEventFiles = [
            {array_items}
        ];"""

    # Replace the existing array in the JavaScript
    pattern = r"const pastEventFiles = \[(.*?)\];"
    new_js_content = re.sub(pattern, new_array, js_content, flags=re.DOTALL)

    # Write the updated JavaScript file
    with open("./js/main.js", "w", encoding="utf-8") as f:
        f.write(new_js_content)

    print(f"Updated image list with {len(image_files)} images:")
    for img in image_files:
        print(f"- {img}")


if __name__ == "__main__":
    update_image_list()
