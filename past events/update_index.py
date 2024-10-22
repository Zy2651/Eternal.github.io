import os
import json


def update_index():
    # Path to your past-events directory
    directory = "past-events"

    # Get all image files
    image_files = [
        f
        for f in os.listdir(directory)
        if f.lower().endswith((".webp", ".jpg", ".jpeg", ".png", ".gif"))
        and f != "index.json"
    ]

    # Create index object
    index = {"images": sorted(image_files)}

    # Write to index.json
    with open(os.path.join(directory, "index.json"), "w") as f:
        json.dump(index, f, indent=4)


if __name__ == "__main__":
    update_index()
