# `vaultRadarSourceGithubEnterprise` Submodule <a name="`vaultRadarSourceGithubEnterprise` Submodule" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSourceGithubEnterprise <a name="VaultRadarSourceGithubEnterprise" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise hcp_vault_radar_source_github_enterprise}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_source_github_enterprise.VaultRadarSourceGithubEnterprise;

VaultRadarSourceGithubEnterprise.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .githubOrganization(java.lang.String)
    .token(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Fully qualified domain name of the server. (Example: myserver.acme.com). |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.githubOrganization">githubOrganization</a></code> | <code>java.lang.String</code> | GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | GitHub personal access token. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Fully qualified domain name of the server. (Example: myserver.acme.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#domain_name VaultRadarSourceGithubEnterprise#domain_name}

---

##### `githubOrganization`<sup>Required</sup> <a name="githubOrganization" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.githubOrganization"></a>

- *Type:* java.lang.String

GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#github_organization VaultRadarSourceGithubEnterprise#github_organization}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.token"></a>

- *Type:* java.lang.String

GitHub personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#token VaultRadarSourceGithubEnterprise#token}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#project_id VaultRadarSourceGithubEnterprise#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarSourceGithubEnterprise resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_source_github_enterprise.VaultRadarSourceGithubEnterprise;

VaultRadarSourceGithubEnterprise.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_source_github_enterprise.VaultRadarSourceGithubEnterprise;

VaultRadarSourceGithubEnterprise.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_source_github_enterprise.VaultRadarSourceGithubEnterprise;

VaultRadarSourceGithubEnterprise.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_source_github_enterprise.VaultRadarSourceGithubEnterprise;

VaultRadarSourceGithubEnterprise.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultRadarSourceGithubEnterprise.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultRadarSourceGithubEnterprise resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultRadarSourceGithubEnterprise to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultRadarSourceGithubEnterprise that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarSourceGithubEnterprise to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganizationInput">githubOrganizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganization">githubOrganization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `githubOrganizationInput`<sup>Optional</sup> <a name="githubOrganizationInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganizationInput"></a>

```java
public java.lang.String getGithubOrganizationInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `githubOrganization`<sup>Required</sup> <a name="githubOrganization" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.githubOrganization"></a>

```java
public java.lang.String getGithubOrganization();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterprise.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSourceGithubEnterpriseConfig <a name="VaultRadarSourceGithubEnterpriseConfig" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_radar_source_github_enterprise.VaultRadarSourceGithubEnterpriseConfig;

VaultRadarSourceGithubEnterpriseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .githubOrganization(java.lang.String)
    .token(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Fully qualified domain name of the server. (Example: myserver.acme.com). |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.githubOrganization">githubOrganization</a></code> | <code>java.lang.String</code> | GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.token">token</a></code> | <code>java.lang.String</code> | GitHub personal access token. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Fully qualified domain name of the server. (Example: myserver.acme.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#domain_name VaultRadarSourceGithubEnterprise#domain_name}

---

##### `githubOrganization`<sup>Required</sup> <a name="githubOrganization" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.githubOrganization"></a>

```java
public java.lang.String getGithubOrganization();
```

- *Type:* java.lang.String

GitHub organization Vault Radar will monitor. Example: "octocat" for the org https://yourcodeserver.com/octocat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#github_organization VaultRadarSourceGithubEnterprise#github_organization}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

GitHub personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#token VaultRadarSourceGithubEnterprise#token}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSourceGithubEnterprise.VaultRadarSourceGithubEnterpriseConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_radar_source_github_enterprise#project_id VaultRadarSourceGithubEnterprise#project_id}

---



