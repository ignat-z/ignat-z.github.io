module Jekyll
  module Tags
    class Map < Liquid::Tag
      def render(*)
        JSON.dump(Psych.load_file('map.yaml'))
      end
    end
  end
end

Liquid::Template.register_tag('map', Jekyll::Tags::Map)
