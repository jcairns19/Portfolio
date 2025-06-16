import './ProjectDisplay.css';
import { TbPointFilled } from "react-icons/tb";

// icon imports used on this page
import homelab from '../../assets/images/homelab1.jpg';
import plex from '../../assets/icons/plex.svg'
import nextcloud from '../../assets/icons/nextcloud.svg'
import gitlab from '../../assets/icons/gitlab.svg'
import jellyfin from '../../assets/icons/jellyfin.svg'
import bitwarden from '../../assets/icons/bitwarden.svg'
import pihole from '../../assets/icons/pi-hole.svg'
import cloudflare from '../../assets/icons/cloudflare.svg'
import ollama from '../../assets/icons/ollama-logo.svg'
import bitcoin from '../../assets/icons/bitcoin.svg'
import electrum from '../../assets/icons/electrum.svg'
import owui from '../../assets/icons/open-webui.svg'
import handbrake from '../../assets/icons/handbrake.svg'
import npm from '../../assets/icons/nginx-proxy-manager.svg'
import minecraft from '../../assets/icons/minecraft.svg'
import wireguard from '../../assets/icons/wireguard.svg'

function ProjectDisplay() {
    return (
        <div className="project-display-container">
            <h2>My Projects</h2>
            <h3>Overview</h3>
            <p>
                This page is dedidcated to all of the projects I have worked professionally and as a hobbyist as they relate to my career as an engineer. I wanted to highlight one project in particular which is my homelab. This project started out in late 2020 with a pile of old computer hardware from scrapped computers and other parts gathered from RPI's technology recycling bins. I sought out to understand what is possible in the realm of self-hosting while hoping to pick up some technical skills like system administration and networking along the way. After countless hours of perservering through trial and error and other challanges, I have build up the system puctured below which is currently running 3 individual servers each with a wide variety of services used by a growing number of friends and family daily. I am proud of hof far I have come with this project and I am excited to see where it leads me in the future.
            </p>
            <img
                src={homelab}
                alt="My homelab setup"
            />
            <div className="project-context-text">
                <strong>Individual projects featured in my homelab:</strong> <br />

                For more information about individual systems, please visit the project pages below.
                <ul className="experience-points">
                    <li>
                            <TbPointFilled />
                            <a href="experiences/Unraid-NAS-Project">Unraid NAS Project</a>
                    </li>
                    <li>
                            <TbPointFilled />
                            <a href="experiences/Proxmox-Server-Project">Proxmox Server Project</a>
                    </li>
                    <li>
                            <TbPointFilled />
                            <a href="experiences/GPU-Compute-Project">GPU Server Project</a>
                    </li>
                </ul>
            </div>
            <h3>Management</h3>
            <p>
                To get into some of the technical specifics of how I manage each of these servers, I use an old Lenovo laptop to access serial ports and to open SSH sessions into each. For the Unraid and Proxmox servers, they also have a web GUI available for management. I configured each machine to have its own static IP address within my local network so that public facing applications are reliably accessible. Below is a list of all services I currently run and the network configuration surrounding them.
            </p>
            <h3>Software Overview</h3>
            <div className="project-context-text project-columns">
                <div>
                    <strong>Web Applications</strong>
                    <ul>
                        <li><img src={plex} alt="Plex" /></li>
                        <li><img src={gitlab} alt="GitLab" /></li>
                        <li><img src={nextcloud} alt="Nextcloud" /></li>
                        <li><img src={bitwarden} alt="Bitwarden" /></li>
                        <li><img src={jellyfin} alt="Jellyfin" /></li>
                        <li><img src={owui} alt="Open Web UI" /></li>
                    </ul>
                </div>
                <div>
                    <strong>Networking</strong>
                    <ul>
                        <li><img src={npm} alt="Nginx Proxy Manager" /></li>
                        <li><img src={pihole} alt="Pi Hole" /></li>
                        <li><img src={cloudflare} alt="Cloudflare" /></li>
                        <li><img src={wireguard} alt="Wireguard" /></li>
                    </ul>
                </div>
                <div>
                    <strong>Others</strong>
                    <ul>
                        <li><img src={ollama} alt="Ollama" /></li>
                        <li><img src={bitcoin} alt="Bitcoin" /></li>
                        <li><img src={electrum} alt="electrum" /></li>
                        <li><img src={handbrake} alt="Handbrake" /></li>
                        <li><img src={minecraft} alt="Minecraft" /></li>
                    </ul>
                </div>
            </div>
            <h3>Deployment</h3>
            <p>All public facing applications are SSL encrypted with Lets-Encrypt and are proxied through Cloudflare DNS. For applications that do not need to face the internet, they are enterd into the local Pi Hole nameserver under a local subdomain that will not resolve on the public internet.</p>

            <h2>All Projects</h2>
        </div>
    );
}

export default ProjectDisplay;