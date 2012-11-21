require "yaml"

def build(item)
  p item['url']

  if item['old_url']
    old_url = item['old_url'].sub("/revisions/current/docs/user-guide/index.html?", "")
    path = "source#{item['url']}"

    path = if Dir.exists?(path)
      "#{path}/index.html.markdown"
    else
      "#{path}.html.markdown"
    end

    content = File.read(path)
    content.sub! /^---\n/, "---\nold_url: #{old_url}\n"
    File.open(path, 'wb') { |file| file.write(content) }
  end

  if item['tree']
    item['tree'].each do |item|
      build item
    end
  end
end

data = YAML::load(File.read("data/documentation.yml"))
data['tree'].each do |item|
  build item
end