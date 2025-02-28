# `vaultSecretsIntegrationMongodbatlas` Submodule <a name="`vaultSecretsIntegrationMongodbatlas` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationMongodbatlas <a name="VaultSecretsIntegrationMongodbatlas" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas hcp_vault_secrets_integration_mongodbatlas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_mongodbatlas.VaultSecretsIntegrationMongodbatlas;

VaultSecretsIntegrationMongodbatlas.Builder.create(Construct scope, java.lang.String id)
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
    .capabilities(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .projectId(java.lang.String)
//  .staticCredentialDetails(VaultSecretsIntegrationMongodbatlasStaticCredentialDetails)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a></code> | MongoDB Atlas API key used to authenticate against the target project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#capabilities VaultSecretsIntegrationMongodbatlas#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#name VaultSecretsIntegrationMongodbatlas#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#project_id VaultSecretsIntegrationMongodbatlas#project_id}

---

##### `staticCredentialDetails`<sup>Optional</sup> <a name="staticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.Initializer.parameter.staticCredentialDetails"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

MongoDB Atlas API key used to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#static_credential_details VaultSecretsIntegrationMongodbatlas#static_credential_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails">putStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetStaticCredentialDetails">resetStaticCredentialDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStaticCredentialDetails` <a name="putStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails"></a>

```java
public void putStaticCredentialDetails(VaultSecretsIntegrationMongodbatlasStaticCredentialDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.putStaticCredentialDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetStaticCredentialDetails` <a name="resetStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.resetStaticCredentialDetails"></a>

```java
public void resetStaticCredentialDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationMongodbatlas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_mongodbatlas.VaultSecretsIntegrationMongodbatlas;

VaultSecretsIntegrationMongodbatlas.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_mongodbatlas.VaultSecretsIntegrationMongodbatlas;

VaultSecretsIntegrationMongodbatlas.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_mongodbatlas.VaultSecretsIntegrationMongodbatlas;

VaultSecretsIntegrationMongodbatlas.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_mongodbatlas.VaultSecretsIntegrationMongodbatlas;

VaultSecretsIntegrationMongodbatlas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VaultSecretsIntegrationMongodbatlas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VaultSecretsIntegrationMongodbatlas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VaultSecretsIntegrationMongodbatlas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VaultSecretsIntegrationMongodbatlas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationMongodbatlas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference">VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetailsInput">staticCredentialDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `staticCredentialDetails`<sup>Required</sup> <a name="staticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetails"></a>

```java
public VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference getStaticCredentialDetails();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference">VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `staticCredentialDetailsInput`<sup>Optional</sup> <a name="staticCredentialDetailsInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.staticCredentialDetailsInput"></a>

```java
public java.lang.Object getStaticCredentialDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlas.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationMongodbatlasConfig <a name="VaultSecretsIntegrationMongodbatlasConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_mongodbatlas.VaultSecretsIntegrationMongodbatlasConfig;

VaultSecretsIntegrationMongodbatlasConfig.builder()
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
    .capabilities(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .projectId(java.lang.String)
//  .staticCredentialDetails(VaultSecretsIntegrationMongodbatlasStaticCredentialDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a></code> | MongoDB Atlas API key used to authenticate against the target project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#capabilities VaultSecretsIntegrationMongodbatlas#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#name VaultSecretsIntegrationMongodbatlas#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#project_id VaultSecretsIntegrationMongodbatlas#project_id}

---

##### `staticCredentialDetails`<sup>Optional</sup> <a name="staticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasConfig.property.staticCredentialDetails"></a>

```java
public VaultSecretsIntegrationMongodbatlasStaticCredentialDetails getStaticCredentialDetails();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

MongoDB Atlas API key used to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#static_credential_details VaultSecretsIntegrationMongodbatlas#static_credential_details}

---

### VaultSecretsIntegrationMongodbatlasStaticCredentialDetails <a name="VaultSecretsIntegrationMongodbatlasStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_mongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails;

VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.builder()
    .apiPrivateKey(java.lang.String)
    .apiPublicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPrivateKey">apiPrivateKey</a></code> | <code>java.lang.String</code> | Private key used alongside the public key to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPublicKey">apiPublicKey</a></code> | <code>java.lang.String</code> | Public key used alongside the private key to authenticate against the target project. |

---

##### `apiPrivateKey`<sup>Required</sup> <a name="apiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPrivateKey"></a>

```java
public java.lang.String getApiPrivateKey();
```

- *Type:* java.lang.String

Private key used alongside the public key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#api_private_key VaultSecretsIntegrationMongodbatlas#api_private_key}

---

##### `apiPublicKey`<sup>Required</sup> <a name="apiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails.property.apiPublicKey"></a>

```java
public java.lang.String getApiPublicKey();
```

- *Type:* java.lang.String

Public key used alongside the private key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_mongodbatlas#api_public_key VaultSecretsIntegrationMongodbatlas#api_public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference <a name="VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_secrets_integration_mongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference;

new VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKeyInput">apiPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKeyInput">apiPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKey">apiPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKey">apiPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiPrivateKeyInput`<sup>Optional</sup> <a name="apiPrivateKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKeyInput"></a>

```java
public java.lang.String getApiPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `apiPublicKeyInput`<sup>Optional</sup> <a name="apiPublicKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKeyInput"></a>

```java
public java.lang.String getApiPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `apiPrivateKey`<sup>Required</sup> <a name="apiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPrivateKey"></a>

```java
public java.lang.String getApiPrivateKey();
```

- *Type:* java.lang.String

---

##### `apiPublicKey`<sup>Required</sup> <a name="apiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.apiPublicKey"></a>

```java
public java.lang.String getApiPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationMongodbatlas.VaultSecretsIntegrationMongodbatlasStaticCredentialDetails">VaultSecretsIntegrationMongodbatlasStaticCredentialDetails</a>

---



