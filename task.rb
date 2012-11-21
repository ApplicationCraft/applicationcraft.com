require "yaml"

def build(item)
  puts "Building: #{item['url']}"

  path = "source#{item['url']}"

  # Take care of this item's tree.
  if item['tree']
    # Create the 'dir.ordered' file in each directory.
    if Dir.exists?(path)
      tree = item['tree'].map do |t|
        t['url'].split('/').last
      end

      File.open("#{path}/dir.ordered", 'w') do |f|
        f.puts tree.join("\n")
      end
    end

    item['tree'].each do |item|
      build item
    end
  end

  # # Prepend the old_url to the YAML front matter.
  # if item['old_url']
  #   old_url = item['old_url'].sub("/revisions/current/docs/user-guide/index.html?", "")

  #   path = if Dir.exists?(path)
  #     "#{path}/index.html.markdown"
  #   else
  #     "#{path}.html.markdown"
  #   end

  #   content = File.read(path)
  #   content.sub! /^---\n/, "---\nold_url: #{old_url}\n"
  #   File.open(path, 'wb') { |file| file.write(content) }
  # end
end

data = YAML::load(File.read("data/documentation.yml"))
data['tree'].each do |item|
  build item
end