module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./node_modules/lottie-web/build/player/lottie.js": "/assets/js/lottie.js"
    });

    eleventyConfig.addPassthroughCopy('assets')
    return {
        passthroughtFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir:{
            input:"src",
            output:"_site",
            includes:"_includes"
        }
    }
    
}

