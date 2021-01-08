<?php

namespace App\Entity;

use App\Repository\UtmRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UtmRepository::class)
 */
class Utm
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $lead_id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $utm_source;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $utm_medium;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $utm_campaign;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $utm_content;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $utm_term;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLeadId(): ?int
    {
        return $this->lead_id;
    }

    public function setLeadId(int $lead_id): self
    {
        $this->lead_id = $lead_id;

        return $this;
    }

    public function getUtmSource(): ?string
    {
        return $this->utm_source;
    }

    public function setUtmSource(?string $utm_source): self
    {
        $this->utm_source = $utm_source;

        return $this;
    }

    public function getUtmMedium(): ?string
    {
        return $this->utm_medium;
    }

    public function setUtmMedium(?string $utm_medium): self
    {
        $this->utm_medium = $utm_medium;

        return $this;
    }

    public function getUtmCampaign(): ?string
    {
        return $this->utm_campaign;
    }

    public function setUtmCampaign(?string $utm_campaign): self
    {
        $this->utm_campaign = $utm_campaign;

        return $this;
    }

    public function getUtmContent(): ?string
    {
        return $this->utm_content;
    }

    public function setUtmContent(?string $utm_content): self
    {
        $this->utm_content = $utm_content;

        return $this;
    }

    public function getUtmTerm(): ?string
    {
        return $this->utm_term;
    }

    public function setUtmTerm(?string $utm_term): self
    {
        $this->utm_term = $utm_term;

        return $this;
    }
}
