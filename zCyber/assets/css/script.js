 document.addEventListener('DOMContentLoaded', function() {
            const logos = [
                { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
                { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
                { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
                { name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
                { name: 'Facebook', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
                { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' }
            ];
            
            const logosTrack = document.querySelector('.logos-track');
            
            // Function to create logo elements
            function createLogoElement(logo) {
                const div = document.createElement('div');
                div.className = 'logo-item';
                
                const img = document.createElement('img');
                img.src = logo.src;
                img.alt = logo.name + ' logo';
                img.className = 'logo-img';
                
                div.appendChild(img);
                return div;
            }
            
            // Add logos to the track (duplicate for seamless loop)
            logos.forEach(logo => {
                logosTrack.appendChild(createLogoElement(logo));
            });
            
            // Duplicate the logos for seamless looping
            logos.forEach(logo => {
                logosTrack.appendChild(createLogoElement(logo));
            });
        });